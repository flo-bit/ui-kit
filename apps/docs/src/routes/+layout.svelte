<script lang="ts">
	import { Head, Toaster } from '@fuxui/base';
	import '../app.css';
	import '../prism.css';

	let { children } = $props();
</script>

{@render children()}

<Head title="fox ui" emojiFavicon="🦊" />

<Toaster />
