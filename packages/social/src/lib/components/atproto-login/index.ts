export { default as AtprotoLoginModal } from './AtprotoLoginModal.svelte';
export { atProtoLoginModalState } from './AtprotoLoginModal.svelte';
export { default as AtprotoLogin } from './AtprotoLogin.svelte';

export type ATProtoLoginProps = {
	login?: (handle: string) => Promise<boolean | undefined>;
	signup?: () => Promise<boolean | undefined>;
	formAction?: string;
	formMethod?: 'dialog' | 'get' | 'post' | 'DIALOG' | 'GET' | 'POST' | null;
};
