<script lang="ts">
	import { Modal } from '@foxui/core';
	import AtprotoLogin from './AtprotoLogin.svelte';
	import type { ATProtoLoginProps } from '.';

	let {
		open = $bindable(false),
		login,
		signup,
		formAction,
		formMethod = 'get',
		loginOnSelect = true,
		host,
		search
	}: ATProtoLoginProps & { open?: boolean; loginOnSelect?: boolean } = $props();

	async function wrappedLogin(handle: string) {
		if (!login) return;
		const result = await login(handle);
		if (result) {
			open = false;
		}
		return result;
	}
</script>

<Modal bind:open class="max-w-sm gap-2 p-4 sm:p-6">
	{#key open}
		<AtprotoLogin
			login={wrappedLogin}
			{signup}
			{formAction}
			{formMethod}
			{loginOnSelect}
			{host}
			{search}
		/>
	{/key}
</Modal>
