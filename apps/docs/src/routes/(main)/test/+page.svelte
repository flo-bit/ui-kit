<script lang="ts">
	import { SvercleContainer } from '@fuxui/base';

	const h = 400;
	const w = 400;
</script>


<div class="svercle overflow-visible" style="--height: {h}; --width:{w}">
	<SvercleContainer curve={0.3} anchor={0.4} fill="#fff" class="text-black px-3 py-5">Hello!</SvercleContainer>
</div>