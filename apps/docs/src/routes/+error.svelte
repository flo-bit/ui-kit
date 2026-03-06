<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<div class="flex min-h-screen items-center justify-center px-4 py-16">
	<div class="w-full max-w-xl space-y-6">
		<div class="text-center mb-8">
			<p class="text-accent-500 dark:text-accent-400 text-6xl font-bold tracking-tight">
				{page.status}
			</p>
			<h1 class="text-base-900 dark:text-base-50 mt-4 text-2xl font-semibold tracking-tight">
				{page.error?.message ?? 'Something went wrong'}
			</h1>
		</div>

		<div
			class="text-base-500 dark:text-base-400  space-y-2 pt-6 text-center text-sm"
		>
			<p>
				go back to the
				<a
					href={resolve('/')}
					class="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 underline underline-offset-2"
				>
					home page</a
				>.
			</p>
		</div>
	</div>
</div>
