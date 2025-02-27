<script>
	import { ThemeToggle } from "$lib/components/theme-toggle";

	let background = 'bg-base-100 dark:bg-base-900 border border-base-200 dark:border-base-800'
</script>

<div
	class="h-screen w-screen flex items-center justify-center p-4"
>
	<div class="max-w-6xl w-full rounded-xl h-full flex flex-col items-center justify-center p-4 text-black dark:text-white">
		<div
			class={["mb-6 flex w-full max-w-6xl items-center justify-between rounded-2xl p-6", background]}
		>
			<div class="font-display text-xl font-bold uppercase">hello there</div>

			<ThemeToggle />
		</div>
		<div
			class="grid w-full h-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-5 lg:max-h-[calc(100vh-150px)]"
		>
			<div
				class={["order-1 col-span-1 row-span-2 w-full rounded-2xl p-6 text-5xl font-bold md:col-span-5", background]}
			>
			</div>
			<div
				class={["order-2 col-span-1 row-span-2 overflow-hidden rounded-2xl p-6 text-5xl font-bold md:col-span-3", background]}
			>
			</div>

			<div
				class="order-last col-span-1 row-span-5 flex w-full flex-col gap-6 text-5xl font-bold md:order-3 md:col-span-4"
			>
				<div class={["grow rounded-2xl p-6 text-5xl font-bold", background]}>
					
				</div>

				<div
					class={["rounded-2xl p-6 text-5xl font-bold", background]}
				>
					
				</div>
			</div>

			<div
				class={["order-5 col-span-1 row-span-3 rounded-2xl p-6 text-5xl font-bold md:col-span-4", background]}
			>
				
			</div>
			<div
				class={["order-6 col-span-1 row-span-3 rounded-2xl p-6 text-5xl font-bold md:col-span-4", background]}
			>
			
			</div>
		</div>
	</div>
</div>
