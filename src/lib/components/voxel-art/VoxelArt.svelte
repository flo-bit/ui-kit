<script lang="ts">
	// from https://tympanus.net/codrops/2025/03/03/css-meets-voxel-art-building-a-rendering-engine-with-stacked-grids/
	// editor: https://voxels.layoutit.com/

	interface VoxelArtData {
		voxels: {
			x: number;
			y: number;
			z: number;
			color: string;
		}[];
	}

	let {
		rows = undefined,
		columns = undefined,
		stacks = undefined,
		cubeSize = 20,
		viewingAngle = 65,
		colorMap = undefined,
		data
	}: {
		rows?: number;
		columns?: number;
		stacks?: number;
		cubeSize?: number;
		viewingAngle?: number;
		colorMap?: Record<string, string>;
		data: VoxelArtData;
	} = $props();

	let maxX = Math.max(...data.voxels.map((voxel) => voxel.x));
	let maxY = Math.max(...data.voxels.map((voxel) => voxel.y));
	let maxZ = Math.max(...data.voxels.map((voxel) => voxel.z));

	if (rows === undefined) {
		rows = maxX;
	}
	if (columns === undefined) {
		columns = maxY;
	}
	if (stacks === undefined) {
		stacks = maxZ + 1;
	}
	if (cubeSize === undefined) {
		cubeSize = 20;
	}
</script>

<div class="flex h-fit w-full items-center justify-center" >
	<div
		class="scene"
style="--columns: {columns}; --rows: {rows}; --stacks: {stacks}; --cube-size: {cubeSize}px; --viewing-angle: {viewingAngle}deg;"
	>
		<div class="floor">
			{#each Array(stacks) as _, i}
				<div class="z" style="transform: translateZ({i * cubeSize - (stacks * cubeSize)}px);">
					{#each data.voxels as voxel}
						{#if voxel.z === i}
							{@render cube(
								`grid-area: ${voxel.x} / ${voxel.y} / ${voxel.x + 1} / ${voxel.y + 1}; color: ${colorMap?.[voxel.color] ?? ('#' + voxel.color)};`
							)}
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

{#snippet cube(style: string)}
	<div class="cube" {style}>
		<div class="face top"></div>
		<div class="face frontRight"></div>
		<div class="face frontLeft"></div>
		<div class="face backLeft"></div>
		<div class="face backRight"></div>
		<div class="face bottom"></div>
	</div>
{/snippet}

<style>
	.scene {
		perspective: 8000px;
		min-height: calc((var(--stacks) + 5) * var(--cube-size));
	}

	.scene * {
		transform-style: preserve-3d;
	}

	@keyframes spin {
		0% {
			transform: rotateX(var(--viewing-angle)) rotate(0deg);
		}
		100% {
			transform: rotateX(var(--viewing-angle)) rotate(360deg);
		}
	}

	.floor {
		transform: rotateX(var(--viewing-angle)) rotate(45deg);
		width: calc(var(--columns) * var(--cube-size));
		height: calc(var(--rows) * var(--cube-size));
		animation: spin 5s linear infinite;
	}

	.cube {
		position: relative;
		transform: translateZ(calc(var(--cube-size) / 2));
	}

	.face {
		position: absolute;
		background: currentColor;
		inset: 0;
	}
	.face:after {
		content: '';
		display: block;
		position: absolute;
		inset: 0;
	}
	.face.frontRight:after {
		background: rgba(0, 0, 0, 0.1);
	}
	.face.frontLeft:after {
		background: rgba(0, 0, 0, 0.15);
	}
	.face.backLeft:after {
		background: rgba(0, 0, 0, 0.2);
	}
	.face.backRight:after {
		background: rgba(0, 0, 0, 0.25);
	}

	.face.top {
		transform: translateZ(calc(var(--cube-size) / 2));
	}
	.face.frontRight {
		transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2));
	}
	.face.frontLeft {
		transform: rotateX(90deg) translateZ(calc(var(--cube-size) / -2));
	}

	.face.bottom {
		transform: translateZ(calc(var(--cube-size) / -2));
	}
	.face.backLeft {
		transform: rotateY(90deg) translateZ(calc(var(--cube-size) / -2));
	}
	.face.backRight {
		transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2));
	}

	.z {
		display: grid;
		grid-template-columns: repeat(var(--columns), var(--cube-size));
		grid-template-rows: repeat(var(--rows), var(--cube-size));
		position: absolute;
		inset: 0;
	}
</style>
