<script lang="ts">
	import GithubCorner from '$lib/components/github-corner/GithubCorner.svelte';
	import { Subheading } from '$lib/components/heading';
</script>

<Subheading>Github Corner</Subheading>

<div
	class="relative mt-6 h-96 w-full overflow-hidden rounded-2xl border border-base-300 p-6 dark:border-base-900"
>
	<div class="text-pretty pr-52 text-7xl font-bold text-base-950 dark:text-base-50">
		My cool github project
	</div>
	<GithubCorner class="absolute" href="https://github.com/flo-bit/ui-kit" />
</div>
