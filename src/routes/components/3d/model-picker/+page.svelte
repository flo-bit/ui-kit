<script lang="ts">
	import { base } from '$app/paths';
	import ModalPicker from '$lib/components/3d/model-picker/ModalPicker.svelte';
	import Button from '$lib/components/base/button/Button.svelte';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import { toast } from 'svelte-sonner';

	let open = $state(false);
</script>

<Subheading class="mb-4">Model Picker</Subheading>

<ModalPicker
	items={[
		{
			path: base + '/models/gltf/Barrel_A.gltf',
			label: 'Barrel A'
		},
		{
			path: base + '/models/gltf/Barrel_B.gltf',
			label: 'Barrel B'
		},
		{
			path: base + '/models/gltf/Box_A.gltf',
			label: 'Box A'
		},
		{
			path: base + '/models/gltf/Box_B.gltf',
			label: 'Box B'
		},
		{
			path: base + '/models/gltf/Coin_A.gltf',
			label: 'Coin A'
		},
		{
			path: base + '/models/gltf/Coin_B.gltf',
			label: 'Coin B'
		},
		{
			path: base + '/models/gltf/Coin_C.gltf',
			label: 'Coin C'
		},
		{
			path: base + '/models/gltf/Cube_Prototype_Large_A.gltf',
			label: 'Cube Prototype Large A'
		},
		{
			path: base + '/models/gltf/Cube_Prototype_Large_B.gltf',
			label: 'Cube Prototype Large B'
		},
		{
			path: base + '/models/gltf/Cube_Prototype_Small.gltf',
			label: 'Cube Prototype Small'
		},
		{
			path: base + '/models/gltf/Door_A_Decorated.gltf',
			label: 'Door A Decorated'
		},
		{
			path: base + '/models/gltf/Door_A.gltf',
			label: 'Door A'
		},
		{
			path: base + '/models/gltf/Door_B.gltf',
			label: 'Door B'
		},
		{
			path: base + '/models/gltf/Dummy_Base.gltf',
			label: 'Dummy Base'
		},
		{
			path: base + '/models/gltf/Pallet_Large.gltf',
			label: 'Pallet Large'
		},
		{
			path: base + '/models/gltf/Pillar_A.gltf',
			label: 'Pillar A'
		},
		{
			path: base + '/models/gltf/Pillar_B.gltf',
			label: 'Pillar B'
		},
		{
			path: base + '/models/gltf/Primitive_Slope_Half.gltf',
			label: 'Primitive Slope Half'
		},
	]}
	bind:open
	onselect={(item) => {
		toast.success(`Selected ${item.label}`);
	}}
	title="Select a model"
/>

<Button onclick={() => (open = true)}>Open</Button>
