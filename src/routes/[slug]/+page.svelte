<script>
	let { data } = $props();

	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import Tooltip from '../../lib/ToolTip.svelte';
	const galleryId = `gallery-${Math.random().toString(36).substr(2, 9)}`;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: `#${galleryId}`,
			children: 'a',
			pswpModule: () => import('photoswipe'),
			pswpOptions: {
				clickToCloseNonZoomable: true,
				captionContent: (slide) => slide.data.element.dataset.pswpCaption
			}
		});

		lightbox.init();
	});
</script>

<div class="flex flex-col items-center min-h-screen info-container pt-16 pb-10">
	<div class="w-full max-w-3xl px-4 space-y-3">
		{#each data.texts as text}
			<p class="text-justify leading-relaxed">{@html text}</p>
		{/each}
	</div>

	<div
		class="flex flex-col items-center lg:items-start lg:flex-row lg:flex-wrap w-full max-w-7xl mt-16 px-4 gap-6 justify-center"
		id={galleryId}
	>
		{#each data.images as image}
			<div class="flex flex-col items-center max-w-100 lg:max-w-40">
				<a
					href={image.path}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					data-pswp-caption={image.desc}
					aria-label={`Ouvrir l'image : ${image.desc}`}
				>
					<img class="img-container" src={image.thumbnail} alt={image.desc} />
				</a>
				<div class="flex gap-2 mt-2 items-center">
					<h2
						data-tooltip-target="tooltip-light"
						data-tooltip-style="light"
						class="font-semibold text-gray-900 text-center"
					>
						{image.title}
					</h2>
					{#if image.src}
						<Tooltip text={image.src} />
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<div class="w-full max-w-xl mt-10 px-4">
		<h2 class="mb-2 text-lg font-semibold text-gray-900">Liens:</h2>
		<ul class="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-1">
			{#each data.links as link}
				<li class="link-container">
					<a href={link.url} class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
						>{link.desc}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
