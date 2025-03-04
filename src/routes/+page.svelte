<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import AlertTitle from '$lib/components/base/alert/alert-title.svelte';
	import Alert from '$lib/components/base/alert/alert.svelte';
	import { AvatarGroup } from '$lib/components/base/avatar';
	import Badge from '$lib/components/base/badge/Badge.svelte';
	import { Button } from '$lib/components/base/button';
	import { Checkbox } from '$lib/components/base/checkbox';
	import Excalidraw from '$lib/components/extra/excalidraw/Excalidraw.svelte';
	import Heading from '$lib/components/base/heading/Heading.svelte';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import Heatmap from '$lib/components/charts/heatmap/Heatmap.svelte';
	import Input from '$lib/components/base/input/Input.svelte';
	import { Label } from '$lib/components/base/label';
	import RingChart from '$lib/components/charts/ring-chart/RingChart.svelte';
	import { Progress } from '$lib/components/extra/progress';
	import ScrollArea from '$lib/components/base/scroll-area/ScrollArea.svelte';
	import { SocialIcons } from '$lib/components/extra/social-icons';
	import Github from '$lib/components/extra/social-icons/Github.svelte';
	import { StarRating } from '$lib/components/extra/star-rating';
	import Textarea from '$lib/components/base/textarea/textarea.svelte';
	import { ThemeToggle } from '$lib/components/base/theme-toggle';
	import FullscreenVideoPlayer, {
		videoPlayer
	} from '$lib/components/extra/video-player/FullscreenVideoPlayer.svelte';
	import SelectTheme from '$lib/preview/SelectTheme.svelte';
	import svg from '$lib/preview/assets/demo.svg?raw';
	import { toast } from 'svelte-sonner';

	let background = 'bg-base-100 dark:bg-base-900 border border-base-200 dark:border-base-800';
	let accentBackground =
		'bg-accent-500/5 dark:bg-accent-500/5 border border-accent-500/20 dark:border-accent-500/20';

	const heatmapData = Array.from({ length: 34 }, () =>
		Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
	) as (0 | 1 | 2 | 3 | 4)[][];

	let checked = $state(false);

	let progress = $state(5);

	$effect(() => {
		setInterval(() => {
			progress = progress > 100 ? 0 : progress + Math.random() * 40;
		}, 1000);
	});

	let review = $state('');
</script>

<ScrollArea type="scroll" class="h-[100dvh] w-screen">
	<div class="flex min-h-screen items-center justify-center p-4 md:p-8">
		<div class="h-full w-full max-w-6xl text-black dark:text-white">
			<div
				class={[
					'mb-4 md:mb-6 flex w-full max-w-6xl items-start justify-between rounded-2xl p-6 md:items-center',
					background
				]}
			>
				<div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
					<Heading>my ui kit</Heading>

					<div>
						<Badge>svelte</Badge>
						<Badge>tailwind</Badge>
					</div>
				</div>
				<div class="flex items-center gap-2">
					<ThemeToggle />
					<Github href="https://github.com/flo-bit/ui-kit" />
				</div>
			</div>
			<div class="grid h-full w-full max-w-6xl grid-cols-1 gap-4 md:gap-6 md:grid-cols-12 md:grid-rows-5">
				<div
					class={[
						'order-1 col-span-1 row-span-2 flex w-full flex-col items-start justify-between rounded-2xl p-6 md:col-span-5',
						accentBackground
					]}
				>
					<div class="w-full">
						<Subheading class="text-lg text-pretty sm:text-xl sm:font-bold"
							>Work in progress, please wait a few months for an actually working version...</Subheading
						>

						<Progress {progress} class="mt-4 mb-6" />
					</div>
					<div class="mt-4">
						<div class="flex items-center space-x-2">
							<Checkbox id="terms" bind:checked aria-labelledby="terms-label" variant="primary" />
							<Label
								id="terms-label"
								for="terms"
								class="text-sm leading-none font-medium text-pretty peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								I don't care, just show me what you got
							</Label>
						</div>

						<Button
							disabled={!checked}
							onclick={() => {
								goto(`${base}/components`);
							}}
							size="lg"
							class="mt-4"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="size-6"
							>
								<path
									d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
								/>
							</svg>
							Browse Components</Button
						>
					</div>
				</div>
				<div
					class={[
						'order-6 col-span-1 row-span-2 min-h-60 overflow-hidden rounded-2xl p-6 md:order-2 md:col-span-3',
						background
					]}
				>
					<div class="flex w-full max-w-full flex-col items-start justify-center gap-2">
						<Subheading>Me and my bros</Subheading>

						<div class="text-base-600 dark:text-base-400 mb-4 text-sm">
							They don't actually know me :(
						</div>
						<AvatarGroup
							avatarClass="border-base-100 dark:border-base-900 size-16"
							users={[
								{
									src: 'https://github.com/flo-bit.png',
									alt: 'flo-bit',
									fallback: 'FB'
								},
								{
									src: 'https://github.com/rich-harris.png',
									alt: 'rich-harris',
									fallback: 'RH'
								},
								{
									src: 'https://github.com/huntabyte.png',
									alt: 'huntabyte',
									fallback: 'HB'
								}
							]}
						/>

						<Button
							class="mt-4"
							onclick={() => videoPlayer.show('https://www.youtube.com/watch?v=u1ZB_rGFyeU')}
							>Play a video</Button
						>

						<FullscreenVideoPlayer />
					</div>
				</div>

				<div
					class="order-2 col-span-1 row-span-5 flex w-full flex-col gap-6 md:order-3 md:col-span-4"
				>
					<div class={['grow rounded-2xl p-6', accentBackground]}>
						<SelectTheme />

						<Subheading class="mt-8">Rate this project</Subheading>
						<StarRating class="mt-2" rating={3} />

						<div class="flex flex-col gap-3">
							<Textarea class="mt-4 w-full" placeholder="Your review" bind:value={review} />
							<div class="flex justify-between gap-2">
								<Button
									variant="link"
									onclick={() => {
										review = '';

										toast.error('So sad', {
											description: 'Maybe review later? :('
										});
									}}>Cancel</Button
								>
								<Button
									onclick={() => {
										review = '';

										const promise = new Promise((resolve, reject) =>
											setTimeout(() => {
												resolve({});
											}, 1500)
										);

										toast.promise(promise, {
											loading: 'Sending review...',
											success: () => {
												review = '';

												return 'Review has been added!';
											}
										});
									}}>Submit</Button
								>
							</div>
						</div>
					</div>

					<div class={['flex flex-col items-start justify-end gap-4 rounded-2xl p-6', background]}>
						<Subheading>These don't actually do anything:</Subheading>
						<SocialIcons discord="#" github="#" twitter="#" youtube="#" bluesky="#" facebook="#" />
					</div>
				</div>

				<div class={['order-5 col-span-1 row-span-3 rounded-2xl p-6 md:col-span-4', background]}>
					<div class="max-w-full">
						<Subheading class="mb-2">This could be your github activity:</Subheading>
						<ScrollArea type="hover" class="w-full pb-2" orientation="horizontal">
							<Heatmap data={heatmapData} />
						</ScrollArea>
					</div>

					<Subheading class="mt-8 mb-2">Login here:</Subheading>
					<div class="mt-2 flex gap-2">
						<Input placeholder="Enter password" class="grow" />

						<Button>Submit</Button>
					</div>
					<Alert class="mt-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-6"
						>
							<path
								fill-rule="evenodd"
								d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
								clip-rule="evenodd"
							/>
						</svg>

						<AlertTitle>Very important please read</AlertTitle>

						<p>Hah, tricked you! This is actually not important at all. But you still read it!</p>
					</Alert>
				</div>
				<div class={['order-6 col-span-1 row-span-3 rounded-2xl p-6 md:col-span-4', background]}>
					<Subheading class="mb-4">This project is made of...</Subheading>
					<RingChart
						colors={[
							{ key: 0, color: 'var(--accent-800)' },
							{ key: 1, color: 'var(--accent-600)' },
							{ key: 2, color: 'var(--accent-400)' },
							{ key: 3, color: 'var(--accent-200)' }
						]}
						data={[
							{
								name: 'Coffee',
								value: 30
							},
							{
								name: 'Bits UI',
								value: 40
							},
							{
								name: 'Sweat',
								value: 20
							},
							{
								name: 'Tears',
								value: 10
							}
						]}
					/>

					<Subheading class="mt-8">Adding excalidraw graphs</Subheading>
					<Excalidraw {svg} alt="excalidraw demo graph" />
				</div>
			</div>
		</div>
	</div>
</ScrollArea>
