<script lang="ts">
	import { AddCopyCodeButtons } from "../copy-code-button";
	import Prose from "./Prose.svelte";
	import type { Snippet } from "svelte";

	let { children, class: className }: { children: Snippet; class?: string } = $props();
</script>
<Prose class={className}>
	{@render children?.()}
</Prose>

<AddCopyCodeButtons />