<script>
	import { Alert, AlertDescription, AlertTitle } from '@foxui/all';
	import { GraduationCap } from '@foxui/all/icons';
</script>

<Alert class="mb-2">
	<GraduationCap size={24} strokeWidth={2} />
	<AlertTitle class="text-rose-500 dark:text-rose-500">Default Alert</AlertTitle>
	<AlertDescription>Alert Description</AlertDescription>
</Alert>

<Alert variant="secondary" class="mb-4">
	<GraduationCap size={24} strokeWidth={2} />
	<AlertTitle>Secondary Alert</AlertTitle>
	<AlertDescription>Alert Description</AlertDescription>
</Alert>

<h3>Preset Alerts</h3>

<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
	<Alert title="Warning alert" type="warning">
		<span>Alert Description</span>
	</Alert>

	<Alert title="Error alert" type="error">
		<span>Alert Description</span>
	</Alert>

	<Alert title="Success alert" type="success">
		<span>Alert Description</span>
	</Alert>

	<Alert title="Info alert" type="info">
		<span>Alert Description</span>
	</Alert>
</div>
