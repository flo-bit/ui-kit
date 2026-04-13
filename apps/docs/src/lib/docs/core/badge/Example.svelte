<script>
	import { Badge } from '@foxui/all';
	import { GraduationCap } from '@foxui/all/icons';
</script>

<h3>Primary</h3>

<div class="flex items-center gap-2">
	<Badge size="sm"><GraduationCap size={16} strokeWidth={2} />default</Badge>
	<Badge size="md"><GraduationCap size={16} strokeWidth={2} />md</Badge>
	<Badge size="lg"><GraduationCap size={20} strokeWidth={2} />lg</Badge>
</div>

<h3>Secondary</h3>

<div class="flex items-center gap-2">
	<Badge size="sm" variant="secondary">Badge</Badge>
	<Badge size="md" variant="secondary">Badge</Badge>
	<Badge size="lg" variant="secondary">Badge</Badge>
</div>

<h3>Colors</h3>

<div class="flex flex-wrap items-center gap-2">
	<Badge class="red">Red</Badge>
	<Badge class="yellow">Yellow</Badge>
	<Badge class="green">Green</Badge>
	<Badge class="blue">Blue</Badge>
	<Badge class="indigo">Indigo</Badge>
	<Badge class="violet">Violet</Badge>
	<Badge class="purple">Purple</Badge>
	<Badge class="fuchsia">Fuchsia</Badge>
	<Badge class="pink">Pink</Badge>
	<Badge class="rose">Rose</Badge>
	<Badge class="orange">Orange</Badge>
	<Badge class="amber">Amber</Badge>
	<Badge class="lime">Lime</Badge>
	<Badge class="emerald">Emerald</Badge>
	<Badge class="teal">Teal</Badge>
	<Badge class="cyan">Cyan</Badge>
	<Badge class="sky">Sky</Badge>
</div>
