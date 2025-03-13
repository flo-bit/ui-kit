<script lang="ts">
	import Prose from '$lib/components/base/prose/Prose.svelte';

	let { children } = $props();
</script>

<Prose>
	{@render children?.()}
</Prose>
