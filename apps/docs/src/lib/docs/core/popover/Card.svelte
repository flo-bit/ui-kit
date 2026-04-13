<script>
	import { Box, Button, Paragraph } from '@foxui/all';
	import { Check, X } from '@foxui/all/icons';
</script>

<Box class="flex items-center justify-between gap-2">
	<Paragraph>Are you sure?</Paragraph>

	<div>
		<Button tabindex={-1} variant="secondary" size="iconSm">
			<X size={24} strokeWidth={1.5} />
		</Button>

		<Button tabindex={-1} size="iconSm">
			<Check size={24} strokeWidth={1.5} />
		</Button>
	</div>
</Box>

<Button tabindex={-1}>Confirm?</Button>
