<script>
	import { Input } from '@foxui/core';
</script>

<h3>Primary</h3>

<div class="flex w-fit flex-col gap-4">
	<Input sizeVariant="sm" placeholder="Enter text here (small)" />
	<Input placeholder="Enter text here (default)" />
	<Input sizeVariant="lg" placeholder="Enter text here (large)" />
</div>

<h3>Secondary</h3>

<div class="flex w-fit flex-col gap-4">
	<Input variant="secondary" sizeVariant="sm" placeholder="Enter text here (small)" />
	<Input variant="secondary" placeholder="Enter text here (default)" />
	<Input variant="secondary" sizeVariant="lg" placeholder="Enter text here (large)" />
</div>
