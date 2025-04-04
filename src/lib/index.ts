export { cn } from '$lib/utils';

// base components
export { Accordion, AccordionItem } from '$lib/components/base/accordion';
export { Alert, AlertDescription, AlertTitle } from '$lib/components/base/alert';
export { Avatar, AvatarGroup } from '$lib/components/base/avatar';
export { Badge } from '$lib/components/base/badge';

export { Button } from '$lib/components/base/button';
export { type ButtonProps } from '$lib/components/base/button/Button.svelte';
export { type ButtonSize, type ButtonVariant, buttonVariants } from '$lib/components/base/button/';

export { default as Box } from '$lib/components/base/box/Box.svelte';
export { default as ImageCard } from '$lib/components/base/card/ImageCard.svelte';
export { default as ChatBubble } from '$lib/components/base/chat-bubble/ChatBubble.svelte';
export { Checkbox } from '$lib/components/base/checkbox';
export { default as Head } from '$lib/components/base/head/Head.svelte';
export { default as Heading } from '$lib/components/base/heading/Heading.svelte';
export { default as Image } from '$lib/components/base/image/Image.svelte';
export { type ImageProps } from '$lib/components/base/image/Image.svelte';
export { default as ImageContainer } from '$lib/components/base/image-container/ImageContainer.svelte';
export { Input } from '$lib/components/base/input/';
export { Label } from '$lib/components/base/label/';
export { default as Modal } from '$lib/components/base/modal/Modal.svelte';
export { default as NumberInput } from '$lib/components/base/number-input/NumberInput.svelte';
export { default as Prose } from '$lib/components/base/prose/Prose.svelte';
export { default as ScrollArea } from '$lib/components/base/scroll-area/ScrollArea.svelte';
export { Slider } from '$lib/components/base/slider';
export { Select } from '$lib/components/base/select/';
export { default as SliderNumber } from '$lib/components/base/slider/SliderNumber.svelte';
export { Toaster } from '$lib/components/base/sonner/';
export { toast } from 'svelte-sonner';
export { Switch } from '$lib/components/base/switch/';
export { Paragraph } from '$lib/components/base/paragraph/';
export { Textarea } from '$lib/components/base/textarea';
export { Tooltip } from '$lib/components/base/tooltip';
export { default as Popover } from '$lib/components/base/popover/Popover.svelte';
export { default as Subheading } from '$lib/components/base/heading/Subheading.svelte';

export { default as AddCopyCodeButtons } from '$lib/components/base/copy-code-button/AddCopyCodeButtons.svelte';

// colors components
export { default as ColorGradientPicker } from '$lib/components/colors/color-gradient-picker/ColorGradientPicker.svelte';
export { ColorPicker, PopoverColorPicker } from '$lib/components/colors/color-picker';
export { ColorSelect } from '$lib/components/colors/color-select';

// extra components
export { default as Excalidraw } from '$lib/components/extra/excalidraw/Excalidraw.svelte';
export { default as Undraw } from '$lib/components/extra/undraw/Undraw.svelte';
export { default as Stopwatch } from '$lib/components/extra/stopwatch/Stopwatch.svelte';
export { default as Timer } from '$lib/components/extra/timer/Timer.svelte';
export { StopwatchState } from '$lib/components/extra/stopwatch/StopwatchState.svelte';
export { TimerState } from '$lib/components/extra/timer/TimerState.svelte';
export { default as Phone } from '$lib/components/extra/phone/Phone.svelte';
export { default as Quote } from '$lib/components/extra/quote/Quote.svelte';
export { default as CardSwiper } from '$lib/components/extra/swiper-cards/CardSwiper.svelte';

// 3d components
export { default as ModelPicker } from '$lib/components/3d/model-picker/base/ModelPicker.svelte';
export { default as ModalModelPicker } from '$lib/components/3d/model-picker/modal/ModalModelPicker.svelte';
export { default as PopoverModelPicker } from '$lib/components/3d/model-picker/popover/PopoverModelPicker.svelte';
export { default as Depth3D } from '$lib/components/3d/depth3d/Depth3D.svelte';
export { default as VoxelArt } from '$lib/components/3d/voxel-art/VoxelArt.svelte';
