import CardAlerts from '$lib/cards/base/CardAlerts.svelte';
import CardAvatar from '$lib/cards/base/CardAvatar.svelte';
import CardBadge from '$lib/cards/base/CardBadge.svelte';
import CardBox from '$lib/cards/base/CardBox.svelte';
import CardButtons from '$lib/cards/base/CardButtons.svelte';
import CardCard from '$lib/cards/base/CardCard.svelte';
import CardChatBubble from '$lib/cards/base/CardChatBubble.svelte';
import CardCheckbox from '$lib/cards/base/CardCheckbox.svelte';
import CardHead from '$lib/cards/base/CardHead.svelte';
import CardImage from '$lib/cards/base/CardImage.svelte';
import CardInput from '$lib/cards/base/CardInput.svelte';
import CardModal from '$lib/cards/base/CardModal.svelte';
import CardNumberInput from '$lib/cards/base/CardNumberInput.svelte';
import CardScrollArea from '$lib/cards/base/CardScrollArea.svelte';
import CardSlider from '$lib/cards/base/CardSlider.svelte';
import CardSonner from '$lib/cards/base/CardSonner.svelte';
import CardSwitch from '$lib/cards/base/CardSwitch.svelte';
import CardTextarea from '$lib/cards/base/CardTextarea.svelte';
import CardTooltip from '$lib/cards/base/CardTooltip.svelte';
import CardProse from '$lib/cards/base/CardProse.svelte';
import CardAccordion from '$lib/cards/base/CardAccordion.svelte';
import CardSelect from '$lib/cards/base/CardSelect.svelte';

import type { Component } from 'svelte';
import CardPopover from '$lib/cards/base/CardPopover.svelte';
import CardSidebar from '$lib/cards/base/CardSidebar.svelte';
import CardTabs from '$lib/cards/base/CardTabs.svelte';
import CardToggle from '$lib/cards/base/CardToggle.svelte';
import CardToggleGroup from '$lib/cards/base/CardToggleGroup.svelte';

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
	// {
	// 	component: CardNumberInput,
	// 	label: 'Number Input',
	// 	href: 'number-input'
	// },
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
	},
	{
		component: CardPopover,
		label: 'Popover',
		href: 'popover'
	},
	{
		component: CardSidebar,
		label: 'Sidebar',
		href: 'sidebar'
	},
	{
		component: CardTabs,
		label: 'Tabs',
		href: 'tabs'
	},
	{
		component: CardToggle,
		label: 'Toggle',
		href: 'toggle'
	},
	{
		component: CardToggleGroup,
		label: 'Toggle Group',
		href: 'toggle-group'
	}
].sort((a, b) => a.label.localeCompare(b.label));
