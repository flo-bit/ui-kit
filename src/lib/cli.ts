#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import AdmZip from 'adm-zip';
import components from './components.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
if (args.length === 0) {
	console.error('Usage: cli <component-name>');
	process.exit(1);
}

const componentName = args[0].toLowerCase();
if (!components[componentName as keyof typeof components]) {
	console.error(`Component "${componentName}" not found in components.json`);
	process.exit(1);
}

const relativePath = components[componentName as keyof typeof components];

const githubUser = 'flo-bit';
const repoName = 'ui-kit';
const branch = 'main';
const zipUrl = `https://github.com/${githubUser}/${repoName}/archive/refs/heads/${branch}.zip`;

const tmpDir = path.join(__dirname, 'tmp');
if (!fs.existsSync(tmpDir)) {
	fs.mkdirSync(tmpDir);
}

const zipPath = path.join(tmpDir, 'repo.zip');

async function downloadZip(url: string, dest: string) {
	console.log(`Downloading ${url} ...`);
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to download ZIP: ${response.statusText}`);
	}
	const buffer = await response.arrayBuffer();
	fs.writeFileSync(dest, Buffer.from(buffer));
	console.log('Download complete.');
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
		} else {
			try {
				const content = fs.readFileSync(fullPath, 'utf8');
				if (content.includes(searchStr)) {
					const newContent = content.split(searchStr).join(replaceStr);
					fs.writeFileSync(fullPath, newContent, 'utf8');
					console.log(`Updated ${fullPath}`);
				}
			} catch (err) {
				console.error('Error:', (err as Error).message);
			}
		}
	}
}

try {
	await downloadZip(zipUrl, zipPath);

	console.log('Extracting ZIP archive...');
	const zip = new AdmZip(zipPath);
	const extractDir = path.join(tmpDir, 'extract');
	if (!fs.existsSync(extractDir)) {
		fs.mkdirSync(extractDir);
	}
	zip.extractAllTo(extractDir, true);
	console.log('Extraction complete.');

	const packageFolder = path.join(extractDir, `${repoName}-${branch}`);
	const sourcePath = path.join(packageFolder, 'src', 'lib', relativePath);
	if (!fs.existsSync(sourcePath)) {
		console.error(`Component folder "${relativePath}" not found in repository ${repoName}`);
		process.exit(1);
	}

	const destDir = path.join(process.cwd(), 'src', 'lib', 'ui', componentName);
	if (!fs.existsSync(destDir)) {
		fs.mkdirSync(destDir, { recursive: true });
	}

	copyRecursive(sourcePath, destDir);
	console.log(`Component "${componentName}" successfully copied to ${destDir}`);

	replaceInFiles(destDir, '$lib', 'fuchs');

	// Optionally, clean up temporary files
	// fs.rmSync(tmpDir, { recursive: true, force: true });
} catch (err) {
	console.error('Error:', (err as Error).message);
	process.exit(1);
}
