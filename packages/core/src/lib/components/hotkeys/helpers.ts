export function likelyWithKeyboard(window = globalThis) {
	const agent = window.navigator.userAgent.toLowerCase();
	return !['iphone', 'ipad', 'android'].some((device) => agent.includes(device));
}
