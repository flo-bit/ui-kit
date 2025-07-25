export * from './bluesky-login';
export * from './post';
export * from './star-rating';
export * from './social-icons';
export * from './swiper-cards';
export * from './user-profile';
export * from './github-corner';
export * from './chat';
export * from './emoji-picker';
export * from './bluesky-post';
export * from './nested-comments';

export function numberToHumanReadable(number: number) {
	if (number < 1000) {
		return number;
	}

	if (number < 1000000) {
		return `${(number / 1000).toFixed(1)}k`;
	}

	return `${(number / 1000000).toFixed(1)}m`;
}