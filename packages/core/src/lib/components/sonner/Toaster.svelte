<script lang="ts">
	import { Toaster as SonnerToaster } from 'svelte-sonner';

	const colorClasses = {
		blue: 'bg-blue-200/50 dark:bg-blue-950/50 text-blue-600 [&_.title]:text-blue-800 [&_.description]:text-blue-700 dark:text-blue-500 border-blue-700/20 dark:border-blue-500/20 dark:[&_.title]:text-blue-300 dark:[&_.description]:text-blue-400',
		red: 'bg-red-200/50 dark:bg-red-950/50 text-red-600 [&_.title]:text-red-800 [&_.description]:text-red-700 dark:text-red-500 border-red-700/20 dark:border-red-500/20 dark:[&_.title]:text-red-300 dark:[&_.description]:text-red-400',
		yellow:
			'bg-yellow-200/50 dark:bg-yellow-950/50 text-yellow-600 [&_.title]:text-yellow-800 [&_.description]:text-yellow-700 dark:text-yellow-500 border-yellow-700/20 dark:border-yellow-500/20 dark:[&_.title]:text-yellow-300 dark:[&_.description]:text-yellow-400',
		green:
			'bg-green-200/50 dark:bg-green-950/50 text-green-600 [&_.title]:text-green-800 [&_.description]:text-green-700 dark:text-green-500 border-green-700/20 dark:border-green-500/20 dark:[&_.title]:text-green-300 dark:[&_.description]:text-green-400',
		indigo:
			'bg-indigo-200/50 dark:bg-indigo-950/50 text-indigo-600 [&_.title]:text-indigo-800 [&_.description]:text-indigo-700 dark:text-indigo-500 border-indigo-700/20 dark:border-indigo-500/20 dark:[&_.title]:text-indigo-300 dark:[&_.description]:text-indigo-400',
		purple:
			'bg-purple-200/50 dark:bg-purple-950/50 text-purple-600 [&_.title]:text-purple-800 [&_.description]:text-purple-700 dark:text-purple-500 border-purple-700/20 dark:border-purple-500/20 dark:[&_.title]:text-purple-300 dark:[&_.description]:text-purple-400',
		pink: 'bg-pink-200/50 dark:bg-pink-950/50 text-pink-600 [&_.title]:text-pink-800 [&_.description]:text-pink-700 dark:text-pink-500 border-pink-700/20 dark:border-pink-500/20 dark:[&_.title]:text-pink-300 dark:[&_.description]:text-pink-400',
		orange:
			'bg-orange-200/50 dark:bg-orange-950/50 text-orange-600 [&_.title]:text-orange-800 [&_.description]:text-orange-700 dark:text-orange-500 border-orange-700/20 dark:border-orange-500/20 dark:[&_.title]:text-orange-300 dark:[&_.description]:text-orange-400',
		teal: 'bg-teal-200/50 dark:bg-teal-950/50 text-teal-600 [&_.title]:text-teal-800 [&_.description]:text-teal-700 dark:text-teal-500 border-teal-700/20 dark:border-teal-500/20 dark:[&_.title]:text-teal-300 dark:[&_.description]:text-teal-400',
		emerald:
			'bg-emerald-200/50 dark:bg-emerald-950/50 text-emerald-600 [&_.title]:text-emerald-800 [&_.description]:text-emerald-700 dark:text-emerald-500 border-emerald-700/20 dark:border-emerald-500/20 dark:[&_.title]:text-emerald-300 dark:[&_.description]:text-emerald-400',
		lime: 'bg-lime-200/50 dark:bg-lime-950/50 text-lime-600 [&_.title]:text-lime-800 [&_.description]:text-lime-700 dark:text-lime-500 border-lime-700/20 dark:border-lime-500/20 dark:[&_.title]:text-lime-300 dark:[&_.description]:text-lime-400',
		cyan: 'bg-cyan-200/50 dark:bg-cyan-950/50 text-cyan-600 [&_.title]:text-cyan-800 [&_.description]:text-cyan-700 dark:text-cyan-500 border-cyan-700/20 dark:border-cyan-500/20 dark:[&_.title]:text-cyan-300 dark:[&_.description]:text-cyan-400',
		sky: 'bg-sky-200/50 dark:bg-sky-950/50 text-sky-600 [&_.title]:text-sky-800 [&_.description]:text-sky-700 dark:text-sky-500 border-sky-700/20 dark:border-sky-500/20 dark:[&_.title]:text-sky-300 dark:[&_.description]:text-sky-400',
		rose: 'bg-rose-200/50 dark:bg-rose-950/50 text-rose-600 [&_.title]:text-rose-800 [&_.description]:text-rose-700 dark:text-rose-500 border-rose-700/20 dark:border-rose-500/20 dark:[&_.title]:text-rose-300 dark:[&_.description]:text-rose-400',
		amber:
			'bg-amber-200/50 dark:bg-amber-950/50 text-amber-600 [&_.title]:text-amber-800 [&_.description]:text-amber-700 dark:text-amber-500 border-amber-700/20 dark:border-amber-500/20 dark:[&_.title]:text-amber-300 dark:[&_.description]:text-amber-400',
		violet:
			'bg-violet-200/50 dark:bg-violet-950/50 text-violet-600 [&_.title]:text-violet-800 [&_.description]:text-violet-700 dark:text-violet-500 border-violet-700/20 dark:border-violet-500/20 dark:[&_.title]:text-violet-300 dark:[&_.description]:text-violet-400',
		fuchsia:
			'bg-fuchsia-200/50 dark:bg-fuchsia-950/50 text-fuchsia-600 [&_.title]:text-fuchsia-800 [&_.description]:text-fuchsia-700 dark:text-fuchsia-500 border-fuchsia-700/20 dark:border-fuchsia-500/20 dark:[&_.title]:text-fuchsia-300 dark:[&_.description]:text-fuchsia-400',
		base: 'bg-base-50/80 border-base-200 dark:bg-base-900/50 dark:border-base-800 [&_.title]:text-base-900 dark:[&_.title]:text-base-50 [&_.description]:text-base-800 dark:[&_.description]:text-base-100',
		accent:
			'bg-accent-200/50 dark:bg-accent-950/50 text-accent-600 [&_.title]:text-accent-800 [&_.description]:text-accent-700 dark:text-accent-500 border-accent-700/20 dark:border-accent-500/20 dark:[&_.title]:text-accent-300 dark:[&_.description]:text-accent-400'
	};

	type Colors = keyof typeof colorClasses;

	const {
		colors = {
			default: 'accent',
			success: 'green',
			error: 'red',
			info: 'blue'
		}
	}: {
		colors?: {
			default?: Colors;
			success?: Colors;
			error?: Colors;
			info?: Colors;
		};
	} = $props();
</script>

<SonnerToaster
	toastOptions={{
		unstyled: true,
		classes: {
			toast:
				'group toast min-w-12 w-fit sm:min-w-64 backdrop-blur-lg border rounded-2xl p-4 flex items-center gap-2 sm:fixed sm:bottom-4 sm:right-0 mx-2',
			title: 'text-base title',
			description: 'text-xs mt-1 description',

			default: colorClasses[colors?.default ?? 'accent'],
			loading: colorClasses[colors?.default ?? 'accent'],

			success: colorClasses[colors?.success ?? 'green'],
			error: colorClasses[colors?.error ?? 'red'],
			info: colorClasses[colors?.info ?? 'blue']
		}
	}}
	position="bottom-right"
/>
