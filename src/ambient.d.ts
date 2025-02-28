// Squelch warnings of image imports from your assets dir
declare module '$lib/assets/*' {
	// eslint-disable-next-line no-var
	var meta;
	export default meta;
}
