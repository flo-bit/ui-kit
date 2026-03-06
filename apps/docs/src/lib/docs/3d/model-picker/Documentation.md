## Usage

```svelte
<ModelPicker
	{items}
	onselect={({ path, label }) => {
		console.log(path, label);
	}}
/>
```