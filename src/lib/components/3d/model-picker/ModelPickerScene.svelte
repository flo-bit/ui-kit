<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { GLTF } from '@threlte/extras';
	import { Box3, Group, Object3D, Vector3 } from 'three';

	let {
		path,
		hover = false
	}: {
		path: string;
		scaleFactor?: number;
		hover?: boolean;
	} = $props();

	let rotation = $state(0);
	let group: Group | undefined = $state();

	const { start, stop } = useTask((delta) => {
		rotation += delta;
	});

	$effect(() => {
		if (hover) {
			start();
		} else {
			stop();
		}
	});
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 2]} fov={50} near={0.1} far={10} />

<T.HemisphereLight args={[0xaaaaaa, 0x444444, 1]} />
<T.DirectionalLight args={[0xffffff, 1]} position={[1, 1, 1]} />

<T.Group rotation={[0.5, rotation + 0.5, 0]}>
	<T.Group bind:ref={group}>
		<GLTF
			url={path}
			onload={(gltf: Group & { scene: Object3D }) => {
				if (!group) return;

				const box = new Box3().setFromObject(gltf.scene);
				const size = box.getSize(new Vector3());
				const center = box.getCenter(new Vector3());

				let maxSize = Math.max(size.x, size.y, size.z);
				let myMaxSize = 1;

				let scale = 0.9 / maxSize;

				group.scale.set(scale, scale, scale);
				group.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
			}}
		/>
	</T.Group>
</T.Group>
