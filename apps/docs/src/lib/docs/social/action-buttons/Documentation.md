## Usage

### ActionButtons Container

```svelte
<script lang="ts">
	let liked = $state(false);
	let bookmarked = $state(false);
</script>

<ActionButtons
	reply={{ count: 5, onclick: () => console.log('reply') }}
	repost={{ count: 12, onclick: () => console.log('repost') }}
	like={{ count: 99, active: liked, onclick: () => (liked = !liked) }}
	bookmark={{ active: bookmarked, onclick: () => (bookmarked = !bookmarked) }}
/>
```

### Individual Buttons

Each button can be used standalone:

```svelte
<script lang="ts">
	let liked = $state(false);
</script>

<LikeButton count={42} active={liked} onclick={() => (liked = !liked)} />
```

### State Management

The parent controls the state via `active` prop. The `onclick` callback handles toggling:

```svelte
<LikeButton
	count={42}
	active={liked}
	onclick={async () => {
		await api.like(postId);
		liked = !liked;
	}}
/>
```
