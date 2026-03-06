import depth3d from '$lib/docs/3d/depth-3d';
import voxelArt from '$lib/docs/3d/voxel-art';
import modelPicker from '$lib/docs/3d/model-picker';
import { toComponentCard, type ComponentCard } from '$lib/types/schema';

export const threeDComponents: ComponentCard[] = [
	depth3d,
	voxelArt,
	modelPicker,
].map(toComponentCard).sort((a, b) => a.label.localeCompare(b.label));
