<script lang="ts">
	import type { Snippet } from 'svelte';
	import CopyButton from './CopyCode.svelte';
 
	let { children, ...restProps }: { children: Snippet } & Record<string, any> = $props();
 
	let codeContent = $state('');
</script>
 
<CopyButton code={codeContent}>
	<pre
		class="relative"
		{...restProps}
		{@attach (node) => {
			codeContent = node.textContent ?? "";
		}}
		>
		{@render children?.()}
	</pre>
</CopyButton>