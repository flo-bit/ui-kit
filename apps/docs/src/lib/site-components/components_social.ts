import cardSwiper from '$lib/docs/social/card-swiper';
import userProfile from '$lib/docs/social/user-profile';
import githubCorner from '$lib/docs/social/github-corner';
import atprotoLogin from '$lib/docs/social/atproto-login';
import starRating from '$lib/docs/social/star-rating';
import emojiPicker from '$lib/docs/social/emoji-picker';
import post from '$lib/docs/social/post';
import linkCard from '$lib/docs/social/link-card';
import atprotoHandlePopup from '$lib/docs/social/atproto-handle-popup';
import { toComponentCard, type ComponentCard } from '$lib/types/schema';

export const socialComponents: ComponentCard[] = [
	cardSwiper,
	userProfile,
	githubCorner,
	atprotoLogin,
	starRating,
	emojiPicker,
	post,
	linkCard,
	atprotoHandlePopup,
].map(toComponentCard).sort((a, b) => a.label.localeCompare(b.label));
