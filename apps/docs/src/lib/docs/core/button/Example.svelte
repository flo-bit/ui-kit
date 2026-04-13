<script>
	import { Button } from '@foxui/all';
	import { GraduationCap } from '@foxui/all/icons';
</script>

<h3>Primary</h3>

<div class="flex items-center gap-2 flex-wrap">
	<Button size="sm"><GraduationCap size={16} strokeWidth={2} />small</Button>

	<Button><GraduationCap size={20} strokeWidth={2} />normal</Button>

	<Button size="lg"><GraduationCap size={20} strokeWidth={2} />large</Button>


	<Button disabled><GraduationCap size={20} strokeWidth={2} />disabled</Button>

</div>


<h3>Secondary</h3>

<div class="flex items-center gap-2">
	<Button variant="secondary" size="sm">small</Button>
	<Button variant="secondary">normal</Button>
	<Button variant="secondary" size="lg">large</Button>
</div>

<h3>Link</h3>

<div class="flex items-center gap-2">
	<Button variant="link" size="sm"><GraduationCap size={16} strokeWidth={2} />small</Button>
	<Button variant="link"><GraduationCap size={20} strokeWidth={2} />normal</Button>
	<Button variant="link" size="lg"><GraduationCap size={20} strokeWidth={2} />large</Button>
</div>

<h3>Icons</h3>

<div>
	<Button size="iconSm"><GraduationCap size={16} strokeWidth={2} /></Button>

	<Button size="icon"><GraduationCap size={20} strokeWidth={2} /></Button>

	<Button size="iconLg"><GraduationCap size={24} strokeWidth={2} /></Button>
</div>

<h3>Colors</h3>

<div class="flex flex-wrap items-center gap-2">
	<Button class="red">Red</Button>
	<Button class="yellow">Yellow</Button>
	<Button class="green">Green</Button>
	<Button class="blue">Blue</Button>
	<Button class="indigo">Indigo</Button>
	<Button class="violet">Violet</Button>
	<Button class="purple">Purple</Button>
	<Button class="fuchsia">Fuchsia</Button>
	<Button class="pink">Pink</Button>
	<Button class="rose">Rose</Button>
	<Button class="orange">Orange</Button>
	<Button class="amber">Amber</Button>
	<Button class="lime">Lime</Button>
	<Button class="emerald">Emerald</Button>
	<Button class="teal">Teal</Button>
	<Button class="cyan">Cyan</Button>
	<Button class="sky">Sky</Button>
</div>
