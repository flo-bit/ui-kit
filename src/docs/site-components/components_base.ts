import CardAlerts from '$docs/cards/base/CardAlerts.svelte';
import CardAvatar from '$docs/cards/base/CardAvatar.svelte';
import CardBadge from '$docs/cards/base/CardBadge.svelte';
import CardBox from '$docs/cards/base/CardBox.svelte';
import CardButtons from '$docs/cards/base/CardButtons.svelte';
import CardCard from '$docs/cards/base/CardCard.svelte';
import CardChatBubble from '$docs/cards/base/CardChatBubble.svelte';
import CardCheckbox from '$docs/cards/base/CardCheckbox.svelte';
import CardHead from '$docs/cards/base/CardHead.svelte';
import CardImage from '$docs/cards/base/CardImage.svelte';
import CardInput from '$docs/cards/base/CardInput.svelte';
import CardModal from '$docs/cards/base/CardModal.svelte';
import CardNumberInput from '$docs/cards/base/CardNumberInput.svelte';
import CardScrollArea from '$docs/cards/base/CardScrollArea.svelte';
import CardSlider from '$docs/cards/base/CardSlider.svelte';
import CardSonner from '$docs/cards/base/CardSonner.svelte';
import CardSwitch from '$docs/cards/base/CardSwitch.svelte';
import CardTextarea from '$docs/cards/base/CardTextarea.svelte';
import CardTooltip from '$docs/cards/base/CardTooltip.svelte';
import CardProse from '$docs/cards/base/CardProse.svelte';
import CardAccordion from '$docs/cards/base/CardAccordion.svelte';
import CardSelect from '$docs/cards/base/CardSelect.svelte';

import type { Component } from 'svelte';

export type ComponentCard = {
	component: Component;
	className?: string;
	label: string;
	href: string;
};

export const baseComponents: ComponentCard[] = [
	{
		component: CardAlerts,
		label: 'Alerts',
		href: 'alert'
	},
	{
		component: CardAvatar,
		label: 'Avatars',
		href: 'avatar'
	},
	{
		component: CardBadge,
		label: 'Badges',
		href: 'badge'
	},
	{
		component: CardBox,
		label: 'Box',
		href: 'box'
	},
	{
		component: CardButtons,
		label: 'Buttons',
		href: 'button'
	},
	{
		component: CardChatBubble,
		label: 'Chat Bubbles',
		href: 'chat-bubble'
	},
	{
		component: CardCheckbox,
		label: 'Checkboxes',
		href: 'checkbox'
	},
	{
		component: CardImage,
		label: 'Images',
		href: 'image'
	},
	{
		component: CardInput,
		label: 'Text Inputs',
		href: 'input'
	},
	{
		component: CardModal,
		label: 'Modals',
		href: 'modal'
	},
	{
		component: CardNumberInput,
		label: 'Number Input',
		href: 'number-input'
	},
	{
		component: CardScrollArea,
		className: 'p-2',
		label: 'Scroll Area',
		href: 'scroll-area'
	},
	{
		component: CardSlider,
		label: 'Sliders',
		href: 'slider'
	},
	{
		component: CardSonner,
		label: 'Sonner',
		href: 'sonner'
	},
	{
		component: CardSwitch,
		label: 'Switches',
		href: 'switch'
	},
	{
		component: CardTextarea,
		label: 'Textarea',
		href: 'textarea'
	},
	{
		component: CardTooltip,
		label: 'Tooltips',
		href: 'tooltip'
	},
	{
		component: CardCard,
		label: 'Card',
		href: 'cards'
	},
	{
		component: CardHead,
		className: 'px-0 gap-0',
		label: 'Head',
		href: 'head'
	},
	{
		component: CardProse,
		label: 'Prose',
		href: 'prose'
	},
	{
		component: CardAccordion,
		label: 'Accordion',
		href: 'accordion'
	},
	{
		component: CardSelect,
		label: 'Select',
		href: 'select'
	}
].sort((a, b) => a.label.localeCompare(b.label));
