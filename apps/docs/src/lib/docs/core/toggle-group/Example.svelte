<script>
	import { ToggleGroup, ToggleGroupItem } from '@foxui/all';
	import { SlidersHorizontal, Download, CircleArrowLeft } from '@foxui/all/icons';
</script>

<div class="flex items-center gap-2">
	<ToggleGroup type="single" value="1">
		<ToggleGroupItem value="1">1</ToggleGroupItem>
		<ToggleGroupItem value="2">2</ToggleGroupItem>
		<ToggleGroupItem value="3">3</ToggleGroupItem>
	</ToggleGroup>

	<ToggleGroup type="single">
		<ToggleGroupItem value="1">
			<SlidersHorizontal size={24} strokeWidth={2} />
		</ToggleGroupItem>
		<ToggleGroupItem value="2">
			<Download size={24} strokeWidth={2} />
		</ToggleGroupItem>
		<ToggleGroupItem value="3">
			<CircleArrowLeft size={24} strokeWidth={2} />
		</ToggleGroupItem>
	</ToggleGroup>
</div>
