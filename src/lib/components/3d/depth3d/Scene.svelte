<script lang="ts" module>
	export type Props = {
		image: {
			image: string;
			depth: string;
		};
		rounded?: number;
		cameraPosition?: [number, number, number];
		rotationScale?: number;
		rotationSpeed?: number;
		detail?: number;
		depthScale?: number;
		mouseMovement?: boolean;
	};
</script>

<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { useTexture, Align } from '@threlte/extras';
	import { Spring } from 'svelte/motion';

	import { Vector2, ShaderMaterial, PlaneGeometry, LinearSRGBColorSpace } from 'three';

	const {
		image,
		rounded = 0.2,
		cameraPosition = [0, 0, 10],
		rotationScale = 0.2,
		rotationSpeed = 2,
		detail = 200,
		depthScale = 1.5,
		mouseMovement = true
	}: Props = $props();

	const rotation = new Vector2(0.5, 0.5);

	const geometry = new PlaneGeometry(7, 7, detail, detail);

	let rotationX = new Spring(0);
	let rotationY = new Spring(0);

	let time = 0;
	let mouseMoved = -1;

	const map = useTexture(image.image, {
		transform: (texture) => {
			texture.colorSpace = LinearSRGBColorSpace;
			return texture;
		}
	});
	const depthMap = useTexture(image.depth, {
		transform: (texture) => {
			return texture;
		}
	});

	const uniforms = {
		uTexture: { type: 't', value: map },
		depthMap: { type: 't', value: depthMap }
	};
	const material = new ShaderMaterial({
		uniforms: uniforms,
		vertexShader: `
  varying vec2 vUv;
  uniform sampler2D depthMap;
  
  void main() {
	  vUv = uv;
	  // move z position based on the depth map
	  float depth = texture2D(depthMap, vUv).r;
	  vec3 newPosition = position + vec3(0.0, 0.0, depth * ${depthScale.toFixed(1)});
	  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }`,
		fragmentShader: `
uniform sampler2D uTexture;
varying vec2 vUv;

float sdRoundedRect(vec2 p, vec2 b, float r) {
	vec2 q = abs(p) - b + vec2(r);
	return length(max(q, 0.0)) - r;
}
	  ${
			rounded > 0.01
				? `
void main() {
	vec2 uv = (vUv * 2.0) - 1.0;

	// Size of the rectangle (half-size)
	vec2 rectSize = vec2(1, 1);

	// Calculate distance to the edge of the rounded rectangle
	float d = sdRoundedRect(uv, rectSize, ${rounded.toFixed(4)});

	// Smooth transition for anti-aliasing
	float aa = fwidth(d);
	float alpha = smoothstep(0.0, aa, -d);

	gl_FragColor = texture2D(uTexture, vUv) * alpha;
}
	  `
				: `

void main() {
	vec2 uv = (vUv * 2.0) - 1.0;
	gl_FragColor = texture2D(uTexture, vUv);
}`
		}
`
	});

	useTask((dt) => {
		if (mouseMoved > 0) {
			mouseMoved -= dt;
		} else {
			time += dt * rotationSpeed;
			rotationX.set(Math.sin(time) * 0.5);
			rotationY.set(Math.cos(time) * 0.5);
		}
	});

	function onDocumentMouseMove(event: MouseEvent) {
		if (!mouseMovement) return;

		// convert to [-0.5, 0.5]
		rotationX.set((event.clientX / window.innerWidth - 0.5) * 2);
		rotationY.set((event.clientY / window.innerHeight - 0.5) * 2);

		mouseMoved = 1;
	}
</script>

<svelte:window onmousemove={onDocumentMouseMove} />

<T.PerspectiveCamera makeDefault position={cameraPosition}></T.PerspectiveCamera>

{#await map then mapValue}
	{#await depthMap then depthValue}
		<Align>
			<T.Mesh
				rotation.x={rotationY.current * rotationScale}
				rotation.y={rotationX.current * rotationScale}
				scale.x={mapValue.image.width / mapValue.image.height}
			>
				<T is={geometry} />
				<T
					is={material}
					uniforms={{
						depthMap: { value: depthValue },
						uTexture: { value: mapValue },
						mouse: { value: rotation }
					}}
				/>
			</T.Mesh>
		</Align>
	{/await}
{/await}
