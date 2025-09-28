<script lang="ts">
	import AlertDocs from './Alert.md';
	import { Prose } from '@fuxui/base';
	import TableOfContents from '$lib/site-components/TableOfContents.svelte';
</script>

<div class="flex gap-8">
	<div class="flex-1 min-w-0">
		<Prose>
			<AlertDocs />
		</Prose>
	</div>
	<div class="hidden xl:block w-64 flex-shrink-0">
		<TableOfContents />
	</div>
</div>
