<script>
	import { Box, Button, Paragraph } from '$lib';
</script>

<Box class="flex items-center justify-between gap-2">
	<Paragraph>Are you sure?</Paragraph>

	<div>
		<Button tabindex={-1} variant="secondary" size="iconSm">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
		</Button>

		<Button tabindex={-1} size="iconSm">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
			</svg>
		</Button>
	</div>
</Box>

<Button tabindex={-1}>Confirm?</Button>
