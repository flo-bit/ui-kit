<script lang="ts">
	import { Subheading, Label, Input, Button } from '@foxui/all';
</script>

<div class="flex flex-col items-start">
	<Subheading class="mb-1 text-xl font-bold">Login with your internet handle</Subheading>
	<div class="text-xs font-light text-neutral-800 dark:text-neutral-200">
		like your bluesky account
	</div>

	<div class="mt-2 w-full">
		<Label for="atproto-handle" class="text-sm">Your handle</Label>
		<div class="mt-2">
			<Input
				sizeVariant="sm"
				type="text"
				name="atproto-handle"
				id="atproto-handle"
				placeholder="yourname.bsky.social"
				class="w-full"
			/>
		</div>
	</div>

	<Button type="submit" size="sm" class="ml-auto mt-2 w-full md:w-auto">{'Login'}</Button>
</div>
