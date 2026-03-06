<script>
	import { Tabs } from '@foxui/all';

	let active = $state('Tab 1');
</script>

<Tabs items={[{ name: 'Tab 1' }, { name: 'Tab 2' }, { name: 'Tab 3' }]} {active} />
