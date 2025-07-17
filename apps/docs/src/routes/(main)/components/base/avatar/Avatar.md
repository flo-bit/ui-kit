<script>
	import Example from './Example.svelte';
</script>

# Avatar

A component for displaying user profile pictures with fallback support.

## Examples

<Example />

## Usage

```svelte
<script>
	import { Avatar, AvatarGroup } from '@fuxui/base';
</script>

<!-- Basic avatar with image -->
<Avatar src="https://github.com/flo-bit.png" alt="flo-bit" />

<!-- Avatar with fallback text -->
<Avatar fallback="FB" />

<!-- Avatar with both image and fallback -->
<Avatar src="https://github.com/flo-bit.png" alt="flo-bit" fallback="FB" />

<!-- Avatar group -->
<AvatarGroup
	users={[
		{
			src: 'https://github.com/flo-bit.png',
			alt: 'flo-bit',
			fallback: 'FB'
		},
		{
			src: 'https://github.com/rich-harris.png',
			alt: 'rich-harris',
			fallback: 'RH'
		}
	]}
/>

<!-- Avatar with theme colors -->
<Avatar src="image.jpg" alt="User" useThemeColor />
```

## API Reference

### Avatar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | `undefined` | The image source URL for the avatar. |
| `alt` | `string` | `undefined` | Alternative text for the avatar image. |
| `fallback` | `string` | `undefined` | Text to display when image fails to load or is not provided. |
| `useThemeColor` | `boolean` | `false` | Whether to apply theme colors to the avatar. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the avatar. |
| `imageClass` | `string` | `undefined` | Additional CSS classes to apply to the image element. |
| `fallbackClass` | `string` | `undefined` | Additional CSS classes to apply to the fallback element. |

### AvatarGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `users` | `Array<{src?: string, alt?: string, fallback?: string}>` | `[]` | Array of user objects to display as avatars. |
| `max` | `number` | `undefined` | Maximum number of avatars to display before showing overflow indicator. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the avatar group. |

## Accessibility

- Proper alt text support for screen readers
- Fallback text when images fail to load
- Keyboard navigation support
- High contrast support
