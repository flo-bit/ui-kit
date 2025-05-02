import { Popover as PopoverPrimitive } from 'bits-ui';
import Content from './popover-content.svelte';
const Root = PopoverPrimitive.Root;
const Trigger = PopoverPrimitive.Trigger;
const Close = PopoverPrimitive.Close;

export {
	Root as PopoverRoot,
	Content as PopoverContent,
	Trigger as PopoverTrigger,
	Close as PopoverClose
};

export { default as Popover } from './Popover.svelte';
export type { PopoverProps } from './Popover.svelte';