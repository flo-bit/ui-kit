#!/usr/bin/env node

/**
 * TODO:
 *
 * - add exports to lib/fuchs/index.ts
 * - add dependent components to each component
 * - add option to also add dependent components
 * - choose between importing dependent components from fuchs or from $lib/fuchs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import components from './components.json' with { type: 'json' };

import fetch from 'node-fetch';
import AdmZip from 'adm-zip';
import { spinner, log } from '@clack/prompts';
import { Command } from 'commander';

// @ts-expect-error - this works when used as a package (cause it will be moved to dist/cli.js)
import pkg from '../package.json' with { type: 'json' };
const version = pkg.version;
// in dev hardcode the version instead
// const version = '0.0.25';

const program = new Command();

const s = spinner();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const githubUser = 'flo-bit';
const repoName = 'ui-kit';
const zipUrl = `https://github.com/${githubUser}/${repoName}/archive/refs/heads/${version}.zip`;
const tmpDir = path.join(__dirname, 'tmp');
const zipPath = path.join(tmpDir, `repo-${version}.zip`);

program.name('fuchs').description('CLI to install fox UI components').version(version);

program
	.command('add')
	.description('Add a new component to the project')
	.argument('<component-name>', 'name of the component to add')
	.action((component: string) => {
		addComponent(component.toLowerCase());
	});

program.parse();

async function downloadZip(url: string, dest: string) {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to download repository: ${response.statusText}`);
	}
	const buffer = await response.arrayBuffer();
	fs.writeFileSync(dest, Buffer.from(buffer));
}

function copyRecursive(src: string, dest: string) {
	const stats = fs.statSync(src);
	if (stats.isDirectory()) {
		if (!fs.existsSync(dest)) {
			fs.mkdirSync(dest);
		}
		const entries = fs.readdirSync(src);
		for (const entry of entries) {
			copyRecursive(path.join(src, entry), path.join(dest, entry));
		}
	} else {
		fs.copyFileSync(src, dest);
	}
}

function replaceInFiles(dir: string, searchStr: string, replaceStr: string) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			replaceInFiles(fullPath, searchStr, replaceStr);
			continue;
		}
		try {
			const content = fs.readFileSync(fullPath, 'utf8');
			if (content.includes(searchStr)) {
				const newContent = content.replaceAll(searchStr, replaceStr);
				fs.writeFileSync(fullPath, newContent, 'utf8');
			}
		} catch (err) {
			console.error('Error:', (err as Error).message);
		}
	}
}

async function downloadRepo() {
	s.start('Downloading repository...');
	const tmpDir = path.join(__dirname, 'tmp');
	if (!fs.existsSync(tmpDir)) {
		fs.mkdirSync(tmpDir);
	}

	await downloadZip(zipUrl, zipPath);

	const zip = new AdmZip(zipPath);
	const extractDir = path.join(tmpDir, `extract-${version}`);
	if (!fs.existsSync(extractDir)) {
		fs.mkdirSync(extractDir);
	}
	zip.extractAllTo(extractDir, true);

	s.stop('Repository downloaded');
	return extractDir;
}

async function addComponent(componentName: string) {
	if (!components[componentName as keyof typeof components]) {
		console.error(`Component "${componentName}" not found in components.json`);
		process.exit(1);
	}
	const relativePath = components[componentName as keyof typeof components];

	let packageFolder = '';
	// check if repository is already downloaded
	const tmpDir = path.join(__dirname, 'tmp');
	if (!fs.existsSync(tmpDir)) {
		fs.mkdirSync(tmpDir);
	}
	const extractDir = path.join(tmpDir, `extract-${version}`);
	if (!fs.existsSync(extractDir)) {
		packageFolder = await downloadRepo();
	} else {
		log.info('Repository already downloaded');
		packageFolder = extractDir;
	}
	packageFolder = path.join(packageFolder, `${repoName}-${version}`);

	const sourcePath = path.join(packageFolder, 'src', 'lib', relativePath);
	if (!fs.existsSync(sourcePath)) {
		console.error(`Component folder "${relativePath}" not found in repository`);
		process.exit(1);
	}

	const destDir = path.join(process.cwd(), 'src', 'lib', 'fuchs', componentName);
	if (!fs.existsSync(destDir)) {
		fs.mkdirSync(destDir, { recursive: true });
	}

	copyRecursive(sourcePath, destDir);
	log.success(`Component "${componentName}" successfully copied to src/lib/fuchs`);

	replaceInFiles(destDir, '$lib', 'fuchs');

	// Optionally, clean up temporary files
	// fs.rmSync(tmpDir, { recursive: true, force: true });
}
