<script>
	import { Tabs } from '@fuxui/base';

	let active = $state('Tab 1');
</script>

<Tabs
	items={[
		{ name: 'Tab 1' },
		{ name: 'Tab 2' },
		{ name: 'Tab 3' }
	]}
	active={active}
/>
