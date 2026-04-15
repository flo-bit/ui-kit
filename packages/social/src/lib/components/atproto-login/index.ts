export { default as AtprotoLogin } from './AtprotoLogin.svelte';
export { default as AtprotoLoginModal } from './AtprotoLoginModal.svelte';

export type ATProtoLoginProps = {
	login?: (handle: string) => Promise<boolean | undefined>;
	signup?: () => Promise<boolean | undefined>;
	formAction?: string;
	formMethod?: 'dialog' | 'get' | 'post' | 'DIALOG' | 'GET' | 'POST' | null;
	/** Base URL of the AppView used for handle lookup. */
	host?: string;
	/** Custom search override for the handle popup. */
	search?: (
		q: string,
		limit: number
	) => Promise<
		{
			handle: string;
			displayName: string;
			avatar: string;
			did: string;
		}[]
	>;
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
