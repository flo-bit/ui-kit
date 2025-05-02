<script>
	import { Textarea } from '@fuxui/base';
</script>

<h3>Primary</h3>

<div class="flex flex-col gap-2 md:flex-row">
	<Textarea placeholder="Enter text here (small)" sizeVariant="sm" />
	<Textarea placeholder="Enter text here (default)" />
	<Textarea placeholder="Enter text here (large)" sizeVariant="lg" />
</div>

<h3>Secondary</h3>

<div class="flex flex-col gap-2 md:flex-row">
	<Textarea placeholder="Enter text here (small)" variant="secondary" sizeVariant="sm" />
	<Textarea placeholder="Enter text here (default)" variant="secondary" />
	<Textarea placeholder="Enter text here (large)" variant="secondary" sizeVariant="lg" />
</div>
