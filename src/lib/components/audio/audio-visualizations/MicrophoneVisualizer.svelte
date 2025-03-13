<script lang="ts">
	let {
		value = 0,
		class: className
	}: {
		value: number;
		class?: string;
	} = $props();
</script>

<svg viewBox="0 0 24 24" class={className} stroke-width="0.5">
	<mask id="microphone-mask-vertical">
		<rect x="0" y="0" width="24" height="24" fill="white" />
		<rect x="0" y="0" width="24" height={(1 - value) * 17} fill="black" />
	</mask>
	<path
		d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z"
		class="fill-accent-200 dark:fill-accent-950 stroke-accent-300 dark:stroke-accent-900"
	/>
	<path
		mask="url(#microphone-mask-vertical)"
		d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z"
		class="fill-accent-500"
	/>
	<path
		d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z"
		class="fill-accent-600 dark:fill-accent-700"
	/>
</svg>
