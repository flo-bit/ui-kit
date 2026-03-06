## Usage

```svelte
<Button onclick={() => (open = true)} variant="secondary">Open Modal</Button>

<Modal bind:open={open} closeButton={false}>
	<Subheading>
		You can put anything in here... Like an image:
	</Subheading>

	<ImageContainer
		src={cute}
		alt="image in modal"
		useThemeColor
		containerClasses="max-w-64 mx-auto"
	/>

	<Button onclick={() => (open = false)}>Cool</Button>
</Modal>
```
