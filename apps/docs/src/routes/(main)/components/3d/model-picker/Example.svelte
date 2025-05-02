<script lang="ts">
	import { base } from '$app/paths';
	import { toast, Button } from '@fuxui/base';

	import { ModelPicker, ModalModelPicker, PopoverModelPicker } from '@fuxui/3d';

	let open = $state(false);

	let vehicles = [
		{
			path: '/models/vehicle-monster-truck.glb',
			label: 'Monster Truck'
		},
		{
			path: '/models/vehicle-racer.glb',
			label: 'Racer'
		},
		{
			path: '/models/vehicle-racer-low.glb',
			label: 'Racer Low'
		},
		{
			path: '/models/vehicle-speedster.glb',
			label: 'Speedster'
		},
		{
			path: '/models/vehicle-drag-racer.glb',
			label: 'Drag Racer'
		},
		{
			path: '/models/vehicle-suv.glb',
			label: 'SUV'
		},
		{
			path: '/models/vehicle-truck.glb',
			label: 'Truck'
		},
		{
			path: '/models/vehicle-vintage-racer.glb',
			label: 'Vintage Racer'
		}
	].map((vehicle) => ({
		...vehicle,
		path: base + vehicle.path
	}));
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
