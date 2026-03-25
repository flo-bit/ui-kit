<script lang="ts">
	import { Input } from '@foxui/all';
</script>

<div class="flex w-full flex-col items-start">
	<div class="relative w-full">
		<Input sizeVariant="sm" type="text" placeholder="flo" class="w-full" />
		<div
			class="border-base-300 bg-base-50 dark:bg-base-800 dark:border-base-700 mt-1.5 w-full rounded-xl border p-0.5 shadow-lg"
		>
			<div
				class="bg-accent-100 dark:bg-accent-600/30 flex w-full items-center gap-2 rounded-lg p-1.5 px-2"
			>
				<div class="bg-accent-500 size-5 shrink-0 rounded-full"></div>
				<span class="text-sm">florian.bsky.social</span>
			</div>
			<div class="flex w-full items-center gap-2 rounded-lg p-1.5 px-2">
				<div class="bg-emerald-500 size-5 shrink-0 rounded-full"></div>
				<span class="text-sm">flora.bsky.social</span>
			</div>
		</div>
	</div>
</div>
