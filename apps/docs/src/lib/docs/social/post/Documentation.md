## Usage

```svelte
<Post
	data={{
		author: {
			displayName: 'flo-bit',
			handle: 'flo-bit.dev',
			avatar: 'https://github.com/flo-bit.png',
			href: 'https://github.com/flo-bit'
		},
		createdAt: new Date().toISOString()
	}}
	actions={{
		reply: { count: 69, onclick: () => console.log('reply') },
		like: { count: 420, onclick: () => console.log('like') }
	}}
>
	Hello, world!
</Post>
```
