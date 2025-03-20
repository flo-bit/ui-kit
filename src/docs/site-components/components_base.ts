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

export const baseComponents = [
	{
		component: CardAlerts,
		className: '',
		label: 'Alerts',
		href: 'alert'
	},
	{
		component: CardAvatar,
		className: '',
		label: 'Avatars',
		href: 'avatar'
	},
	{
		component: CardBadge,
		className: '',
		label: 'Badges',
		href: 'badge'
	},
	{
		component: CardBox,
		className: '',
		label: 'Box',
		href: 'box'
	},
	{
		component: CardButtons,
		className: '',
		label: 'Buttons',
		href: 'button'
	},
	{
		component: CardChatBubble,
		className: '',
		label: 'Chat Bubbles',
		href: 'chat-bubble'
	},
	{
		component: CardCheckbox,
		className: '',
		label: 'Checkboxes',
		href: 'checkbox'
	},
	{
		component: CardImage,
		className: '',
		label: 'Images',
		href: 'image'
	},
	{
		component: CardInput,
		className: '',
		label: 'Text Inputs',
		href: 'input'
	},
	{
		component: CardModal,
		className: '',
		label: 'Modals',
		href: 'modal'
	},
	{
		component: CardNumberInput,
		className: '',
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
		className: '',
		label: 'Sliders',
		href: 'slider'
	},
	{
		component: CardSonner,
		className: '',
		label: 'Sonner',
		href: 'sonner'
	},
	{
		component: CardSwitch,
		className: '',
		label: 'Switches',
		href: 'switch'
	},
	{
		component: CardTextarea,
		className: '',
		label: 'Textarea',
		href: 'textarea'
	},
	{
		component: CardTooltip,
		className: '',
		label: 'Tooltips',
		href: 'tooltip'
	},
	{
		component: CardCard,
		className: '',
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
		className: '',
		label: 'Prose',
		href: 'prose'
	},
	{
		component: CardAccordion,
		className: '',
		label: 'Accordion',
		href: 'accordion'
	},
	{
		component: CardSelect,
		className: '',
		label: 'Select',
		href: 'select'
	}
].sort((a, b) => a.label.localeCompare(b.label));
