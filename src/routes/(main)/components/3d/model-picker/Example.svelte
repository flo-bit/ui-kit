<script lang="ts">
	import { base } from '$app/paths';
	import { toast } from 'svelte-sonner';

	import { ModelPicker } from '$lib';
	import ModalModelPicker from '$lib/components/3d/model-picker/modal/ModalModelPicker.svelte';
	import PopoverModelPicker from '$lib/components/3d/model-picker/popover/PopoverModelPicker.svelte';
	import Button from '$lib/components/base/button/Button.svelte';

	let open = $state(false);

	let vehicles = [
		{
			path: base + '/models/glb/vehicle-monster-truck.glb',
			label: 'Monster Truck'
		},
		{
			path: base + '/models/glb/vehicle-racer.glb',
			label: 'Racer'
		},
		{
			path: base + '/models/glb/vehicle-racer-low.glb',
			label: 'Racer Low'
		},
		{
			path: base + '/models/glb/vehicle-speedster.glb',
			label: 'Speedster'
		},
		{
			path: base + '/models/glb/vehicle-drag-racer.glb',
			label: 'Drag Racer'
		},
		{
			path: base + '/models/glb/vehicle-suv.glb',
			label: 'SUV'
		},
		{
			path: base + '/models/glb/vehicle-truck.glb',
			label: 'Truck'
		},
		{
			path: base + '/models/glb/vehicle-vintage-racer.glb',
			label: 'Vintage Racer'
		}
	];
</script>

<h3>Inline Model Picker</h3>

<ModelPicker
	items={vehicles.slice(0, 5)}
	onselect={(item) => {
		toast.success(`Selected ${item.label}`);
	}}
	maxColumns={3}
/>

<h3>Modal Model Picker</h3>

<Button onclick={() => (open = true)} class="mt-4">Open Modal</Button>

<ModalModelPicker
	items={vehicles}
	bind:open
	title="Select a model"
	onselect={(item) => {
		toast.success(`Selected ${item.label}`);
	}}
/>

<h3>Popover Model Picker</h3>

<PopoverModelPicker
	items={vehicles}
	onselect={(item) => {
		toast.success(`Selected ${item.label}`);
	}}
	title="Select a model"
	triggerClasses="mt-4"
/>
