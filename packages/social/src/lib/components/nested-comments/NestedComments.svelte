<script lang="ts">
	import type { PostData } from '../post';
	import Comment from './Comment.svelte';

	let { comments }: { comments: PostData[] } = $props();
</script>

{#if comments.length > 0}
	<div class="pl-3 pt-4">
		{#each comments as comment}
			<Comment {comment} depth={0} />
		{/each}
	</div>
{/if}
