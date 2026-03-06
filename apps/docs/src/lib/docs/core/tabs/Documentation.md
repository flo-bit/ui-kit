## Usage

```svelte
<!-- alternatively you can also supply a href for each tab -->
<Tabs
	items={[
		{ name: 'Tab 1', onclick: () => (active = 'Tab 1') },
		{ name: 'Tab 2', onclick: () => (active = 'Tab 2') }
	]}
	active={active}
/>
```
