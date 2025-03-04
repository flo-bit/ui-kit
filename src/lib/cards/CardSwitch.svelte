<script>
	import { Switch } from '$lib/components/base/switch';
	import { Label } from '$lib/components/base/label';
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center space-x-2">
		<Switch id="terms-switch" aria-labelledby="terms-switch-label" checked tabindex={-1} />
		<Label
			id="terms-switch-label"
			for="terms-switch"
			class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
		>
			Yes, I do
		</Label>
	</div>

	<div class="flex items-center space-x-2">
		<Switch id="terms-switch" aria-labelledby="terms-switch-label" tabindex={-1} />
		<Label
			id="terms-switch-label"
			for="terms-switch"
			class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
		>
			No, I don't
		</Label>
	</div>
</div>
