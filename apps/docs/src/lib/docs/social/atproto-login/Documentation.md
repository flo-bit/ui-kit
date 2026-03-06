## Usage

### Add modal to your `+layout.svelte`

```svelte
<AtprotoLoginModal
	login={async (handle) => {
		// do login and return true if login
		// is successful and should hide the modal
	}}
	signup={async () => {
		// do signup and return true if signup
		// is successful and should hide the modal
	}}
/>
```

### Open the modal

```svelte
<Button onclick={() => atProtoLoginModalState.show()}>Login</Button>
```