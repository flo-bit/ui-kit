<script>
	import { Toggle } from '@foxui/all';
	import { GraduationCap } from '@foxui/all/icons';
</script>

<div class="flex items-center gap-2">
	<Toggle>Toggle</Toggle>

	<Toggle>
		<GraduationCap size={20} strokeWidth={2} />
	</Toggle>
	<Toggle size="xs">
		<GraduationCap size={16} strokeWidth={2} />
	</Toggle>
	<Toggle size="sm">
		<GraduationCap size={16} strokeWidth={2} />
	</Toggle>

	<Toggle size="lg">
		<GraduationCap size={20} strokeWidth={2} />
	</Toggle>

	<Toggle>
		<GraduationCap size={24} strokeWidth={2} />
		Toggle
	</Toggle>
</div>
