<script lang="ts">
	import { AtprotoHandlePopup, toast } from '@foxui/all';
</script>

<AtprotoHandlePopup onselected={(actor) => toast.success(`Selected handle: ${actor.handle}`)} />