export { default as AtprotoLoginModal } from './AtprotoLoginModal.svelte';
export { atProtoLoginModalState } from './AtprotoLoginModal.svelte';

export type ATProtoLoginProps = {
	login?: (handle: string) => Promise<boolean | undefined>;
	signup?: () => Promise<boolean | undefined>;
	formAction?: string;
	formMethod?: 'dialog' | 'get' | 'post' | 'DIALOG' | 'GET' | 'POST' | null;
};

export function saveRecentLogin(profile: {
	did: string;
	handle: string;
	avatar?: string;
	displayName?: string;
}) {
	try {
		const existing = JSON.parse(localStorage.getItem('recent-logins') || '{}');
		existing[profile.did] = profile;
		localStorage.setItem('recent-logins', JSON.stringify(existing));
	} catch {}
}
