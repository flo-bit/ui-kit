import accordion from '$lib/docs/core/accordion';
import alert from '$lib/docs/core/alert';
import avatar from '$lib/docs/core/avatar';
import badge from '$lib/docs/core/badge';
import box from '$lib/docs/core/box';
import button from '$lib/docs/core/button';
import cards from '$lib/docs/core/cards';
import chatBubble from '$lib/docs/core/chat-bubble';
import checkbox from '$lib/docs/core/checkbox';
import head from '$lib/docs/core/head';
import image from '$lib/docs/core/image';
import input from '$lib/docs/core/input';
import modal from '$lib/docs/core/modal';
import popover from '$lib/docs/core/popover';
import prose from '$lib/docs/core/prose';
import scrollArea from '$lib/docs/core/scroll-area';
import select from '$lib/docs/core/select';
import sidebar from '$lib/docs/core/sidebar';
import slider from '$lib/docs/core/slider';
import sonner from '$lib/docs/core/sonner';
import switchDoc from '$lib/docs/core/switch';
import tabs from '$lib/docs/core/tabs';
import textarea from '$lib/docs/core/textarea';
import themeToggle from '$lib/docs/core/theme-toggle';
import toggle from '$lib/docs/core/toggle';
import toggleGroup from '$lib/docs/core/toggle-group';
import tooltip from '$lib/docs/core/tooltip';
import { toComponentCard, type ComponentCard } from '$lib/types/schema';

export type { ComponentCard };

export const baseComponents: ComponentCard[] = [
	accordion,
	alert,
	avatar,
	badge,
	box,
	button,
	cards,
	chatBubble,
	checkbox,
	head,
	image,
	input,
	modal,
	popover,
	prose,
	scrollArea,
	select,
	sidebar,
	slider,
	sonner,
	switchDoc,
	tabs,
	textarea,
	themeToggle,
	toggle,
	toggleGroup,
	tooltip,
].map(toComponentCard).sort((a, b) => a.label.localeCompare(b.label));
