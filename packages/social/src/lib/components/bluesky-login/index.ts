export { default as BlueskyLoginModal } from './BlueskyLoginModal.svelte';
export { blueskyLoginModalState } from './BlueskyLoginModal.svelte';
export { default as BlueskyLogin } from './BlueskyLogin.svelte';

export type BlueskyLoginProps = {
	login?: (handle: string) => Promise<boolean | undefined>;
	formAction?: string;
	formMethod?: 'dialog' | 'get' | 'post' | 'DIALOG' | 'GET' | 'POST' | null;
};