<script>
	export let text = 'Missing text';
	let showTooltip = false;
</script>

<div class="relative inline-block">
	<button
		on:click={() => (showTooltip = true)}
		on:mouseleave={() => (showTooltip = false)}
		class="ml-2 p-1 rounded-full hover:bg-gray-200"
		aria-label="Voir la source de l'image"
	>
		<svg class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</button>

	{#if showTooltip}
		<div
			role="tooltip"
			class={`absolute z-10 w-48 p-2 mt-2 text-sm text-white bg-gray-800 rounded shadow-lg`}
		>
			{text}
		</div>
	{/if}
</div>

<style>
	.tool-tip-text {
		font-size: 0.5rem; /* 0.75rem (12px) */
		line-height: calc(1 / 0.5);
	}

	.toottip-button {
		align-items: center;
	}
</style>
