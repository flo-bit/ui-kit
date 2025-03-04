<script lang="ts">
	import GithubCorner from '$lib/components/base/github-corner/GithubCorner.svelte';
	import { Subheading } from '$lib/components/base/heading';
</script>

<Subheading>Github Corner</Subheading>

<div
	class="border-base-300 dark:border-base-900 relative mt-6 h-96 w-full overflow-hidden rounded-2xl border p-6"
>
	<div class="text-base-950 dark:text-base-50 pr-52 text-7xl font-bold text-pretty">
		My cool github project
	</div>
	<GithubCorner class="absolute" href="https://github.com/flo-bit/ui-kit" />
</div>
