<script>
	export let text = 'Tooltip text';
	export let position = 'bottom';
	let showTooltip = false;
</script>

<div class="relative inline-block">
	<button
		on:click={() => (showTooltip = true)}
		on:mouseleave={() => (showTooltip = false)}
		class="toottip-button inline-flex justify-center w-3 h-3 rounded-full bg-gray-200 text-gray-700
         hover:bg-gray-300 active:bg-gray-400 transition
         focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
	>
		<span class="tool-tip-text font-semibold tracking-wide">src</span>
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
