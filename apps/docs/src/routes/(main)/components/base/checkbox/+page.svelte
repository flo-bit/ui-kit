<script lang="ts">
	import CheckboxDocs from './Checkbox.md';
	import { Prose } from '@fuxui/base';
	import TableOfContents from '$lib/site-components/TableOfContents.svelte';
</script>

<div class="flex gap-8">
	<div class="flex-1 min-w-0">
		<Prose>
			<CheckboxDocs />
		</Prose>
	</div>
	<div class="hidden xl:block w-64 flex-shrink-0">
		<TableOfContents />
	</div>
</div>
