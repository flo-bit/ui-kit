<script>
	import { base } from '$app/paths';
	import CardAlerts from '$lib/cards/CardAlerts.svelte';
	import CardAvatar from '$lib/cards/CardAvatar.svelte';
	import CardBadge from '$lib/cards/CardBadge.svelte';
	import CardBox from '$lib/cards/CardBox.svelte';
	import CardButtons from '$lib/cards/CardButtons.svelte';
	import CardChatBubble from '$lib/cards/CardChatBubble.svelte';
	import CardCheckbox from '$lib/cards/CardCheckbox.svelte';
	import CardImage from '$lib/cards/CardImage.svelte';
	import CardInput from '$lib/cards/CardInput.svelte';
	import CardModal from '$lib/cards/CardModal.svelte';
	import CardNumberInput from '$lib/cards/CardNumberInput.svelte';
	import CardScrollArea from '$lib/cards/CardScrollArea.svelte';
	import CardSlider from '$lib/cards/CardSlider.svelte';
	import CardSonner from '$lib/cards/CardSonner.svelte';
	import CardSwitch from '$lib/cards/CardSwitch.svelte';
	import CardTextarea from '$lib/cards/CardTextarea.svelte';
	import CardTooltip from '$lib/cards/CardTooltip.svelte';
	import { Button, buttonVariants } from '$lib/components/base/button';
	import Navbar from '$lib/components/base/navbar/Navbar.svelte';
	import * as Popover from '$lib/components/base/popover';

	import { ThemeToggle } from '$lib/components/base/theme-toggle';
	import { Github } from '$lib/components/extra/social-icons';
	import SelectTheme from '$lib/preview/SelectTheme.svelte';
	import { cn } from '$lib/utils';

	const cards = [
		{
			component: CardAlerts,
			className: '',
			label: 'Alerts',
			href: '/alert'
		},
		{
			component: CardAvatar,
			className: '',
			label: 'Avatars',
			href: '/avatar'
		},
		{
			component: CardBadge,
			className: '',
			label: 'Badges',
			href: '/badge'
		},
		{
			component: CardBox,
			className: '',
			label: 'Boxes',
			href: '/box'
		},
		{
			component: CardButtons,
			className: '',
			label: 'Buttons',
			href: '/button'
		},
		{
			component: CardChatBubble,
			className: '',
			label: 'Chat Bubbles',
			href: '/chat-bubble'
		},
		{
			component: CardCheckbox,
			className: '',
			label: 'Checkboxes',
			href: '/checkbox'
		},
		{
			component: CardImage,
			className: '',
			label: 'Images',
			href: '/image'
		},
		{
			component: CardInput,
			className: '',
			label: 'Inputs',
			href: '/input'
		},
		{
			component: CardModal,
			className: '',
			label: 'Modals',
			href: '/modal'
		},
		{
			component: CardNumberInput,
			className: '',
			label: 'Number Inputs',
			href: '/number-input'
		},
		{
			component: CardScrollArea,
			className: 'p-2',
			label: 'Scroll Areas',
			href: '/scroll-area'
		},
		{
			component: CardSlider,
			className: '',
			label: 'Sliders',
			href: '/slider'
		},
		{
			component: CardSonner,
			className: '',
			label: 'Sonner',
			href: '/sonner'
		},
		{
			component: CardSwitch,
			className: '',
			label: 'Switches',
			href: '/switch'
		},
		{
			component: CardTextarea,
			className: '',
			label: 'Textareas',
			href: '/textarea'
		},
		{
			component: CardTooltip,
			className: '',
			label: 'Tooltips',
			href: '/tooltip'
		}
	];
</script>


<Navbar>
	<div>
		<Button variant="link" class="block font-normal lg:hidden" popovertarget="mobile-menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6!"
			>
				<path
					fill-rule="evenodd"
					d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
					clip-rule="evenodd"
				></path>
			</svg>
		</Button>
	</div>
	<div class="flex items-end gap-4">
		<Popover.Root>
			<Popover.Trigger
				class={cn(
					buttonVariants({ variant: 'link', size: 'default' }),
					'flex cursor-pointer items-center gap-0 -space-x-2'
				)}
			>
				<div
					class=" from-accent-500 to-accent-600 border-accent-700 dark:border-accent-400 z-10 size-6 rounded-full border bg-gradient-to-b"
				></div>

				<div
					class=" from-base-500 to-base-600 border-base-700 dark:border-base-400 size-6 rounded-full border bg-gradient-to-b"
				></div>
			</Popover.Trigger>
			<Popover.Content>
				<SelectTheme showTitle={false} />
			</Popover.Content>
		</Popover.Root>
		<ThemeToggle />

		<Github href="https://github.com/flo-bit/ui-kit" class="py-2 pl-2 pr-4" />
	</div>
</Navbar>

<div>
	<div
		class="mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-2 px-8 py-24"
	>
		<h1 class="text-4xl md:leading-14 text-pretty md:text-5xl font-bold mt-8 my-12 text-base-950 dark:text-base-50 max-w-2xl tracking-tight">
			Easy to use UI components built with Tailwind and Svelte
		</h1>
		<h2 class="text-xl font-medium mb-4 text-base-800 dark:text-base-200">Base components</h2>
		<div class="grid w-full grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each cards as card}
				<div class="group relative transition-opacity duration-150 hover:opacity-90 flex flex-col gap-3 md:gap-4 items-start">
					<div
						class="bg-base-100 pointer-events-none w-full dark:bg-base-900/30 border-base-200 dark:border-base-900 relative h-44 rounded-2xl border overflow-hidden"
					>
						<div
							class={cn(
								'absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 p-6 transition-transform duration-300 group-hover:scale-105',
								card.className,
							)}
							aria-hidden="true"
							tabindex="-1"
						>
							<card.component />
						</div>
					</div>
					<a
						href={base + `/components${card.href}`}
						class="focus-visible:outline-2 rounded-xl focus-visible:outline-accent-500 focus-visible:outline-offset-2"
					>
						<span class="mx-2 text-sm font-semibold text-base-900 dark:text-base-50">{card.label}</span>
						<span class="absolute inset-0"></span>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
