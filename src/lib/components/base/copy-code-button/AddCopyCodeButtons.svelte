<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { onMount } from "svelte";
	import CopyCodeButton from "./CopyCodeButton.svelte";

  onMount(() => {
    addButtons();
  });

  afterNavigate(() => {
    addButtons();
  });

	let codeblocks: HTMLElement[] = $state([]);

  function addButtons() {
    codeblocks = Array.from(document.querySelectorAll("pre"));
    for (let codeblock of codeblocks) {
      codeblock.classList.add("group", "relative");
    }
  }
</script>

{#each codeblocks as codeblock}
	<CopyCodeButton codeblock={codeblock} />
{/each}
