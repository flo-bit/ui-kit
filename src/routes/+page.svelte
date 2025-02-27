<script>
	import { Heading } from '$lib/components/heading';
	import AlertPreview from '$lib/preview/AlertPreview.svelte';
	import AvatarPreview from '$lib/preview/AvatarPreview.svelte';
	import BadgesPreview from '$lib/preview/BadgesPreview.svelte';
	import ButtonsPreview from '$lib/preview/ButtonsPreview.svelte';
	import CheckboxPreview from '$lib/preview/CheckboxPreview.svelte';
	import ColorSelectPreview from '$lib/preview/ColorSelectPreview.svelte';
	import Container from '$lib/preview/Container.svelte';
	import Depth3DPreview from '$lib/preview/Depth3DPreview.svelte';
	import GithubCornerPreview from '$lib/preview/GithubCornerPreview.svelte';
	import HeatmapPreview from '$lib/preview/HeatmapPreview.svelte';
	import InputPreview from '$lib/preview/InputPreview.svelte';
	import PhonePreview from '$lib/preview/PhonePreview.svelte';
	import PieChartPreview from '$lib/preview/PieChartPreview.svelte';
	import ProgressPreview from '$lib/preview/ProgressPreview.svelte';
	import StarRatingPreview from '$lib/preview/StarRatingPreview.svelte';
	import TextareaPreview from '$lib/preview/TextareaPreview.svelte';
	import TooltipPreview from '$lib/preview/TooltipPreview.svelte';
	import VideoPlayerPreview from '$lib/preview/VideoPlayerPreview.svelte';
</script>

<Container>
	<Heading class="mb-8">All</Heading>

	<div class="flex w-full flex-col divide-y divide-base-200 dark:divide-base-900">
		<div class="flex flex-col gap-4 py-8">
			<AlertPreview></AlertPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<AvatarPreview></AvatarPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<BadgesPreview></BadgesPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<ButtonsPreview></ButtonsPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<CheckboxPreview></CheckboxPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<ColorSelectPreview></ColorSelectPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<Depth3DPreview></Depth3DPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<GithubCornerPreview></GithubCornerPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<HeatmapPreview></HeatmapPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<InputPreview></InputPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<PhonePreview></PhonePreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<PieChartPreview></PieChartPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<ProgressPreview></ProgressPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<StarRatingPreview></StarRatingPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<TextareaPreview></TextareaPreview>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<TooltipPreview></TooltipPreview>
		</div>
		<div class="flex flex-col items-start gap-4 py-8">
			<VideoPlayerPreview></VideoPlayerPreview>
		</div>
	</div>
</Container>
