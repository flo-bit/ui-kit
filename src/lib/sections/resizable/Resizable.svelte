<script lang="ts">
	import { Portal } from 'bits-ui';
	import { PaneGroup, Pane, PaneResizer } from 'paneforge';
	import { draggable, droppable, type DragDropState } from './dragndrop';

	import TimerPreview from '$docs/preview/TimerPreview.svelte';
	import WaveformAudioPlayerPreview from '$docs/preview/WaveformAudioPlayerPreview.svelte';
	import NumberInputPreview from '$docs/preview/base/NumberInputPreview.svelte';
	import ThemeToggle from '$lib/components/base/theme-toggle/ThemeToggle.svelte';
	import SelectTheme from '$docs/preview/SelectTheme.svelte';

	let contentToPanes = $state({
		first: '#pane1',
		second: '#pane2',
		third: '#pane3'
	});

	let paneToContent = $state({
		'#pane1': 'first',
		'#pane2': 'second',
		'#pane3': 'third'
	});

	function handleDrop(event: DragDropState) {
		const { sourceContainer, targetContainer } = event;

		if (!sourceContainer || !targetContainer) return;

		const targetPane = targetContainer;
		const sourcePane = contentToPanes[sourceContainer as keyof typeof contentToPanes];

		// get current content of target container
		const targetContent = paneToContent[targetContainer as keyof typeof paneToContent];
		const sourceContent = sourceContainer;

		contentToPanes[targetContent as keyof typeof contentToPanes] = sourcePane;
		contentToPanes[sourceContent as keyof typeof contentToPanes] = targetPane;

		paneToContent[sourcePane as keyof typeof paneToContent] = targetContent;
		paneToContent[targetPane as keyof typeof paneToContent] = sourceContent;
	}

	let background = 'bg-base-100 dark:bg-base-900 border border-base-200 dark:border-base-800 relative overflow-hidden rounded-2xl p-6 pt-10 h-full w-full flex flex-col gap-4';
	let accentBackground =
		'bg-accent-500/5 dark:bg-accent-500/5 border border-accent-500/20 dark:border-accent-500/20';
</script>

<div class="h-screen w-screen">
	<PaneGroup direction="horizontal" class="p-6">
		<Pane defaultSize={50} id="pane1" class="h-full p-2">
			<div
				id="pane1"
				use:droppable={{ container: '#pane1', callbacks: { onDrop: handleDrop } }}
				class="h-full w-full rounded-2xl"
			></div>
		</Pane>
		<PaneResizer
			class="bg-accent-200 dark:bg-accent-900 h-full w-1 rounded-full opacity-0 hover:opacity-100"
		/>
		<Pane defaultSize={50} class="">
			<PaneGroup direction="vertical">
				<Pane defaultSize={50} class="p-2">
					<div
						use:droppable={{ container: '#pane2', callbacks: { onDrop: handleDrop } }}
						id="pane2"
						class="h-full w-full rounded-2xl"
					></div>
				</Pane>
				<PaneResizer
					class="bg-accent-200 dark:bg-accent-900 h-1 w-full rounded-full opacity-0 hover:opacity-100"
				/>
				<Pane defaultSize={50} class="p-2">
					<div
						id="pane3"
						use:droppable={{ container: '#pane3', callbacks: { onDrop: handleDrop } }}
						class="h-full w-full rounded-2xl"
					></div>
				</Pane>
			</PaneGroup>
		</Pane>
	</PaneGroup>
</div>

<Portal to={contentToPanes.first}>
	<div
		class="h-full w-full"
		use:draggable={{
			container: 'first',
			dragData: { id: 'first' },
			handle: '.handle'
		}}
	>
		<div
			class={background}
		>
			<button class="handle bg-base-500/5 absolute top-0 right-0 left-0 h-5 w-full cursor-grab">
				<span class="sr-only">drag</span>
			</button>

			<ThemeToggle class="absolute top-6 right-2" />

			<SelectTheme />

		</div>
	</div>
</Portal>

<Portal to={contentToPanes.second}>
	<div
		class="h-full w-full"
		use:draggable={{ container: 'second', dragData: { id: 'second' }, handle: '.handle' }}
	>
		<div
			class={background}
		>
			<button class="handle bg-base-500/5 absolute top-0 right-0 left-0 h-5 w-full cursor-grab">
				<span class="sr-only">drag</span>
			</button>

			<NumberInputPreview />
			
			<WaveformAudioPlayerPreview />
		</div>
	</div>
</Portal>

<Portal to={contentToPanes.third}>
	<div
		class="h-full w-full"
		use:draggable={{ container: 'third', dragData: { id: 'third' }, handle: '.handle' }}
	>
		<div
			class={background}
		>
			<button class="handle bg-base-500/5 absolute top-0 right-0 left-0 h-5 w-full cursor-grab">
				<span class="sr-only">drag</span>
			</button>

			<TimerPreview />
		</div>
	</div>
</Portal>
