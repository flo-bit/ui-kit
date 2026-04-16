<script lang="ts">
	import { RadioGroup, Paragraph, Subheading } from '@foxui/all';

	let value = $state('comfortable');
	let plan = $state('pro');
</script>

<div class="not-prose flex flex-col gap-4">
	<RadioGroup
		bind:value
		options={[
			{ value: 'default', label: 'Default' },
			{ value: 'comfortable', label: 'Comfortable' },
			{ value: 'compact', label: 'Compact', disabled: true }
		]}
	/>
</div>

<Paragraph>Selected: <code>{value}</code></Paragraph>

<Subheading>With descriptions</Subheading>

<div class="not-prose flex flex-col gap-4">
	<RadioGroup
		bind:value={plan}
		options={[
			{
				value: 'hobby',
				label: 'Hobby',
				description: 'Free forever. Great for small side projects.'
			},
			{
				value: 'pro',
				label: 'Pro',
				description: '$12/month. Unlimited projects and team seats.'
			},
			{
				value: 'enterprise',
				label: 'Enterprise',
				description: 'Custom pricing with SSO and priority support.',
				disabled: true
			}
		]}
	/>
</div>

<Paragraph>Plan: <code>{plan}</code></Paragraph>
