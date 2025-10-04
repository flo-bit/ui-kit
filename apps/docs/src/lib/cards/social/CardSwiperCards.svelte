<script>
	import { Button } from '@foxui/core';
</script>

<div class="relative flex p-8">
	<div
		class="bg-base-200/50 dark:bg-base-800/50 border-base-300/50 dark:border-base-700/50 h-24 w-16 rounded-xl border p-4"
	></div>
	<div
		class="bg-base-200 dark:bg-base-800 border-base-300 dark:border-base-700 -ml-8 h-24 w-16 rotate-12 rounded-xl border p-4"
	></div>

	<div class="absolute bottom-2 -ml-10 flex w-full justify-between px-2">
		<Button size="iconSm">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.5"
				stroke="currentColor"
				class="size-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
		</Button>
		<Button size="iconSm">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
				/>
			</svg>
		</Button>
	</div>
</div>
