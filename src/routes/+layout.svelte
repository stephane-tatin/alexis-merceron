<script lang="ts">
	import '../app.css';
	import data from '$lib/data.json';
	import { resolve } from '$app/paths';
	import { activeNavItem } from '$lib/store';

	function displayTitle(navId: number) {
		return data.find((d) => d.id === navId)?.title;
	}

	let showTitle = true;

	$: if (isOpen) {
		showTitle = false;
	} else {
		setTimeout(() => {
			showTitle = true;
		}, 300); // correspond à la durée de la transition du menu
	}

	let isOpen = false;
	function setActive(e: any) {
		activeNavItem.set(+e.target.id);
		isOpen = false;
	}
</script>

<header class="inset-x-0 top-0 z-50 bg-white shadow">
	<div class="w-full h-40 md:h-52">
		<img class="w-full h-full object-cover" src="./nav2.png" alt="navigation BG" />
	</div>
	<nav class="flex items-center justify-between p-4 lg:px-8">
		<button class="flex lg:hidden p-2 text-gray-700" on:click={() => (isOpen = !isOpen)}>
			{#if !isOpen}
				☰
			{:else}
				✕
			{/if}
		</button>

		<div
			class={`flex flex-col gap-4 mt-4 lg:mt-0 lg:flex lg:flex-row lg:gap-x-12 
          transition-all duration-300 ease-in-out 
          overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:opacity-100 lg:max-h-full'}`}
		>
			{#each data as nav}
				<a
					id={nav.id.toString()}
					class={`text-sm font-semibold px-3 py-2 rounded-md transition-colors
                  ${
										$activeNavItem === nav.id
											? 'bg-gray-200 text-gray-900'
											: 'text-gray-700 hover:bg-gray-100'
									}`}
					on:click={setActive}
					href={resolve(`/${nav.path}`)}
				>
					{nav.title}
				</a>
			{/each}
		</div>
		{#if showTitle}
			<span
				class={` transition-all duration-200 ease-in-out lg:hidden
                ${isOpen ? 'hidden opacity-0 scale-95' : 'block opacity-100 scale-100'}
      			${!isOpen ? 'delay-300' : ''}`}
			>
				{displayTitle($activeNavItem)}
			</span>
		{/if}
	</nav>
</header>

<slot />

<style>
</style>
