import type { ComponentCard } from './components_base';
import CardSwiperCards from '$lib/cards/social/CardSwiperCards.svelte';
import CardUserProfile from '$lib/cards/social/CardUserProfile.svelte';
import CardGithubCorner from '$lib/cards/social/CardGithubCorner.svelte';
import CardBlueskyLogin from '$lib/cards/social/CardBlueskyLogin.svelte';
import CardStarRating from '$lib/cards/social/CardStarRating.svelte';
import CardEmojiPicker from '$lib/cards/social/CardEmojiPicker.svelte';
import CardSocialPost from '$lib/cards/social/CardSocialPost.svelte';
import CardLinkCard from '$lib/cards/social/CardLinkCard.svelte';

export const socialComponents: ComponentCard[] = [
	{
		component: CardSwiperCards,
		label: 'Card Swiper',
		href: 'card-swiper'
	},
	{
		component: CardUserProfile,
		label: 'User Profile',
		href: 'user-profile'
	},
	{
		component: CardGithubCorner,
		label: 'Github Corner',
		href: 'github-corner'
	},
	{
		component: CardBlueskyLogin,
		label: 'Bluesky Login',
		href: 'bluesky-login'
	},
	{
		component: CardStarRating,
		label: 'Star Rating',
		href: 'star-rating'
	},
	{
		component: CardEmojiPicker,
		label: 'Emoji Picker',
		href: 'emoji-picker'
	},
	{
		component: CardSocialPost,
		label: 'Social Media Post',
		href: 'post'
	},
	{
		component: CardLinkCard,
		label: 'Link Card',
		href: 'link-card'
	}
].sort((a, b) => a.label.localeCompare(b.label));
