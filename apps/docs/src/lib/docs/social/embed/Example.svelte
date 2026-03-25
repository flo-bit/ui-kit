<script lang="ts">
	import { Box } from '@foxui/all';
	import { EmbedImages, EmbedExternal, EmbedVideo, EmbedQuotedPost } from '@foxui/all';
</script>

<Box class="not-prose relative flex min-h-24 w-full flex-col gap-8">
	<div>
		<h3 class="text-base-600 dark:text-base-400 mb-2 text-sm font-medium">Images</h3>
		<EmbedImages
			data={{
				type: 'images',
				images: [
					{
						alt: 'A beautiful sunset',
						thumb: 'https://picsum.photos/seed/embed1/400/300',
						fullsize: 'https://picsum.photos/seed/embed1/1200/900',
						aspectRatio: { width: 4, height: 3 }
					},
					{
						alt: 'Mountain landscape',
						thumb: 'https://picsum.photos/seed/embed2/400/300',
						fullsize: 'https://picsum.photos/seed/embed2/1200/900',
						aspectRatio: { width: 4, height: 3 }
					}
				]
			}}
		/>
	</div>

	<div>
		<h3 class="text-base-600 dark:text-base-400 mb-2 text-sm font-medium">Images (sensitive)</h3>
		<EmbedImages
			data={{
				type: 'images',
				sensitive: true,
				images: [
					{
						alt: 'Hidden image',
						thumb: 'https://picsum.photos/seed/embed3/400/300',
						fullsize: 'https://picsum.photos/seed/embed3/1200/900',
						aspectRatio: { width: 4, height: 3 }
					}
				]
			}}
		/>
	</div>

	<div>
		<h3 class="text-base-600 dark:text-base-400 mb-2 text-sm font-medium">External Link</h3>
		<EmbedExternal
			data={{
				type: 'external',
				external: {
					href: 'https://flo-bit.dev',
					thumb: 'https://flo-bit.dev/og.jpg',
					title: "hi, i'm florian",
					description: 'full-stack software engineer based in berlin'
				}
			}}
		/>
	</div>

	<div>
		<h3 class="text-base-600 dark:text-base-400 mb-2 text-sm font-medium">Video (sensitive)</h3>
		<EmbedVideo
			data={{
				type: 'video',
				sensitive: true,
				video: {
					playlist: '',
					thumb: '',
					alt: 'A video',
					aspectRatio: { width: 16, height: 9 }
				}
			}}
		/>
	</div>

	<div>
		<h3 class="text-base-600 dark:text-base-400 mb-2 text-sm font-medium">Quoted Post</h3>
		<EmbedQuotedPost
			record={{
				author: {
					displayName: 'flo-bit',
					handle: 'flo-bit.dev',
					avatar: 'https://github.com/flo-bit.png'
				},
				htmlContent: 'This is a quoted post!',
				createdAt: new Date(Date.now() - 60000).toISOString()
			}}
		/>
	</div>
</Box>
