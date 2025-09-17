<script lang="ts">
	import '../app.css';
	import { assets } from '$lib';
	import { resolve } from '$app/paths';
	import { activeNavItem, isOpen } from '$lib/store';
	import { displayTitle, setActive } from '$lib/nav';
	import { page } from '$app/state';

	let showTitle = true;
	$: currentTitle = displayTitle(assets, $activeNavItem);

	const currentId = assets.find((a) => a.path === page.url.pathname.slice(1))?.id;
	currentId && setActive(currentId.toString(), activeNavItem, isOpen);

	$: if ($isOpen) {
		showTitle = false;
	} else {
		setTimeout(() => (showTitle = true), 300);
	}
</script>

<header class="inset-x-0 top-0 z-50 bg-white shadow">
	<div class="w-full h-40 md:h-52">
		<img class="w-full h-full object-cover" src="./nav2.png" alt="navigation BG" loading="lazy" />
	</div>
	<nav class="flex items-center justify-between p-4 lg:px-8">
		<button
			class="flex lg:hidden p-2 text-gray-700"
			on:click={() => isOpen.set(!$isOpen)}
			aria-label={$isOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={$isOpen}
			aria-controls="nav-menu"
		>
			{#if !$isOpen}
				☰
			{:else}
				✕
			{/if}
		</button>

		<div
			class={`flex flex-col gap-4 mt-4 lg:mt-0 lg:flex lg:flex-row lg:gap-x-12 
          transition-all duration-300 ease-in-out 
          overflow-hidden
          ${$isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:opacity-100 lg:max-h-full'}`}
		>
			{#each assets as nav}
				<a
					id={nav.id.toString()}
					class={`text-xl lg:text-sm font-semibold px-3 py-2 rounded-md transition-colors
                  ${
										$activeNavItem === nav.id
											? 'bg-gray-200 text-gray-900'
											: 'text-gray-700 hover:bg-gray-100'
									}`}
					on:click={(e: any) => e.target?.id && setActive(e.target.id, activeNavItem, isOpen)}
					on:keydown={(e: any) =>
						e.key === 'Enter' && e.target?.id && setActive(e.target.id, activeNavItem, isOpen)}
					href={resolve(`/${nav.path}`)}
				>
					{nav.title}
				</a>
			{/each}
		</div>
		{#if showTitle}
			<h2
				class={`"mb-2 text-xl pr-10 font-semibold text-gray-900 transition-all duration-200 ease-in-out lg:hidden
                ${$isOpen ? 'hidden opacity-0 scale-95' : 'block opacity-100 scale-100'}
      			${!$isOpen ? 'delay-300' : ''}`}
			>
				{currentTitle}
			</h2>
		{/if}
	</nav>
</header>
<slot />
<a
	href="mailto:stephane.tatin@gmail.com"
	class="mb-3 mr-3 flex justify-end font-medium text-blue-400 dark:text-blue-500 hover:underline"
	>Contact</a
>
