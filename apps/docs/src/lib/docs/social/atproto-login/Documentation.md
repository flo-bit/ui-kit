## Usage

### Add modal to your `+layout.svelte`

```svelte
<script>
	let open = $state(false);
</script>

<AtprotoLoginModal
	bind:open
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
<Button onclick={() => (open = true)}>Login</Button>
```

### Inline (non-modal) version

Use `AtprotoLogin` to embed the login form directly in a page:

```svelte
<AtprotoLogin
	login={async (handle) => {
		// do login
	}}
/>
```
