let _enabled = true;

export const hapticsConfig = {
	get enabled() {
		return _enabled;
	},
	set enabled(v: boolean) {
		_enabled = v;
	}
};
