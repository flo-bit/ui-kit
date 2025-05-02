<script lang="ts">
	import { onDestroy } from 'svelte';
	import { register, unregister } from './state';

	export let date: Date | number;
	export let locale: string;
	export let live = true;

	let instance = new Object();
	let text = '';

	register(instance, date, locale, live, (value) => ({ text } = value));

	onDestroy(() => unregister(instance));
</script>

<span class={$$props.class}>{text}</span>
