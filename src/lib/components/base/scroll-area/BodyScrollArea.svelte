<style>
	:global(.body::-webkit-scrollbar-track) {
		background-color: transparent;
	}

	@supports (scrollbar-width: auto) {
		:global(body) {
			scrollbar-color: var(--color-base-400) transparent;
			scrollbar-width: thin;
		}

		:global(.dark body) {
			scrollbar-color: var(--color-base-800) transparent;
		}
	}

	@supports not (scrollbar-width: auto) {
		:global(body::-webkit-scrollbar) {
			width: 14px;
			height: 14px;
		}
	}

	:global(body::-webkit-scrollbar-thumb) {
		background-color: var(--color-base-400);
		border-radius: 20px;
		border: 4px solid transparent;
		background-clip: content-box;
	}

	:global(body::-webkit-scrollbar-thumb:hover) {
		background-color: var(--color-base-500);
	}

	/* Dark mode rules */
	:global(.dark body::-webkit-scrollbar-thumb) {
		background-color: var(--color-base-800);
	}

	:global(.dark body::-webkit-scrollbar-thumb:hover) {
		background-color: var(--color-base-700);
	}
</style>
