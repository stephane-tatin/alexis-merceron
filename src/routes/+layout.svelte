<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import data from '$lib/data.json';
	import { base } from '$app/paths';

	let isActive = 1;
	function setActive(e) {
		isActive = +e.srcElement.id;
	}
</script>

<header class="inset-x-0 top-0 z-50 bg-white shadow">
	<div class="nav-img-container">
		<img src="./nav2.png" alt="" />
	</div>
	<nav class="flex items-center justify-between p-6 lg:px-8">
		<div class="lg:flex lg:gap-x-12">
			{#each data as nav}
				<a
					id={nav.id.toString()}
					class={`text-sm font-semibold text-gray-900 px-3 py-2 rounded-md ${isActive === nav.id ? 'bg-gray-200' : ''}`}
					on:click={setActive}
					href="{base}/{nav.path}">{nav.title}</a
				>
			{/each}
		</div>
	</nav>
</header>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<slot />

<style>
	.nav-img-container img {
		width: 300%;
		height: auto;
		object-fit: cover;

		top: 0;
		left: -100px;
		height: 200px;
	}
</style>
