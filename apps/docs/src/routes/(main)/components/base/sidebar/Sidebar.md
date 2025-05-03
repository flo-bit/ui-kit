# Sidebar

## Example

For an example see the Sidebar at the side of this page.

## Usage

```svelte
<script>
	import { Sidebar } from '@fuxui/base';
</script>

<Sidebar>
	<div>
		<div>Home</div>
		<div>Settings</div>
		<div>Profile</div>
	</div>
</Sidebar>

<!-- to show mobile version add a popovertarget to a button -->
<Button class="block lg:hidden" popovertarget="mobile-menu">
	Menu
</Button>
```
