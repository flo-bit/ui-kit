<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';

	export const toggleVariants = tv({
		base: 'hover:bg-base-200/50 dark:hover:bg-base-800/50 dark:hover:text-base-50 hover:text-base-950 data-[state=on]:bg-accent-400/40 dark:data-[state=on]:bg-accent-500/15 dark:data-[state=on]:text-accent-300 data-[state=on]:text-accent-950 inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		variants: {
			variant: {
				default: ''
			},
			size: {
				default: 'h-10 min-w-10 px-3',
				sm: 'h-9 min-w-9 px-2.5',
				lg: 'h-11 min-w-11 px-5'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	export type ToggleVariant = VariantProps<typeof toggleVariants>['variant'];
	export type ToggleSize = VariantProps<typeof toggleVariants>['size'];
	export type ToggleVariants = VariantProps<typeof toggleVariants>;
</script>

<script lang="ts">
	import { Toggle as TogglePrimitive } from 'bits-ui';
	import { cn } from '../../utils';

	let {
		ref = $bindable(null),
		pressed = $bindable(false),
		class: className,
		size = 'default',
		variant = 'default',
		...restProps
	}: TogglePrimitive.RootProps & {
		variant?: ToggleVariant;
		size?: ToggleSize;
	} = $props();
</script>

<TogglePrimitive.Root
	bind:ref
	bind:pressed
	class={cn(toggleVariants({ variant, size }), className)}
	{...restProps}
/>
