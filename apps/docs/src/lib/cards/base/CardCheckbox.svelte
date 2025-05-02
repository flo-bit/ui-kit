<script>
	import { Checkbox, Label } from '@fuxui/base';
</script>

<div class="flex items-center space-x-2">
	<Checkbox id="terms" aria-labelledby="terms-label" checked tabindex={-1} />
	<Label
		id="terms-label"
		for="terms"
		class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Yes, I do
	</Label>
</div>

<div class="mt-4 flex items-center space-x-2">
	<Checkbox id="terms" aria-labelledby="terms-label" variant="secondary" tabindex={-1} />
	<Label
		id="terms-label"
		for="terms"
		class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		No, I don't
	</Label>
</div>
