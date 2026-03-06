import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { ComponentDoc, APISchema, PropType } from '$lib/types/schema';

const modules = import.meta.glob('/src/lib/docs/*/*/index.ts', { eager: true }) as Record<
	string,
	{ default: ComponentDoc }
>;

const rawDocs = import.meta.glob('/src/lib/docs/*/*/Documentation.md', {
	query: '?raw',
	eager: true
}) as Record<string, { default: string }>;

const rawExamples = import.meta.glob('/src/lib/docs/*/*/Example.svelte', {
	query: '?raw',
	eager: true
}) as Record<string, { default: string }>;

function formatType(type: string | PropType): string {
	if (typeof type === 'string') return type;
	return type.definition as string;
}

function formatApiSchema(schema: APISchema): string {
	const lines: string[] = [];
	lines.push(`### ${schema.title}`);
	if (schema.description) lines.push(schema.description);

	if (schema.props) {
		lines.push('');
		lines.push('| Prop | Type | Default | Description |');
		lines.push('|------|------|---------|-------------|');

		for (const [name, prop] of Object.entries(schema.props)) {
			const type = formatType(prop.type);
			const def = prop.default ?? '-';
			const tags: string[] = [];
			if (prop.required) tags.push('required');
			if (prop.bindable) tags.push('bindable');
			const desc = prop.description + (tags.length ? ` (${tags.join(', ')})` : '');
			lines.push(`| ${name} | \`${type}\` | \`${def}\` | ${desc} |`);
		}
	}

	return lines.join('\n');
}

export const GET: RequestHandler = ({ params }) => {
	const { category, slug } = params;
	const basePath = `/src/lib/docs/${category}/${slug}`;

	const mod = modules[`${basePath}/index.ts`];
	if (!mod) error(404, 'Component not found');

	const comp = mod.default;
	const sections: string[] = [];

	sections.push(`# ${comp.title}`);

	const rawExample = rawExamples[`${basePath}/Example.svelte`];
	if (rawExample) {
		sections.push('## Example\n\n```svelte\n' + rawExample.default.trim() + '\n```');
	}

	const rawDoc = rawDocs[`${basePath}/Documentation.md`];
	if (rawDoc) {
		sections.push('## Documentation\n\n' + rawDoc.default.trim());
	}

	if (comp.sources?.length) {
		const sourceLines: string[] = [];
		for (const source of comp.sources) {
			if (source.package === 'bits-ui') {
				sourceLines.push(
					`This component uses the bits-ui component: ${source.component ?? source.label}, see here for the documentation for that: ${source.href}/llms.txt`
				);
			} else {
				sourceLines.push(`Based on "${source.label}" (${source.href})`);
			}
		}
		sections.push('## Sources\n\n' + sourceLines.join('\n'));
	}

	if (comp.api?.length) {
		sections.push('## API Reference\n\n' + comp.api.map(formatApiSchema).join('\n\n'));
	}

	return new Response(sections.join('\n\n') + '\n', {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
