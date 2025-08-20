<script>
	let { data } = $props();

	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import Tooltip from '../../lib/ToolTip.svelte';

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery-1',
			children: 'a',
			pswpModule: () => import('photoswipe'),
			pswpOptions: {
				clickToCloseNonZoomable: true,
				captionContent: (slide) => slide.data.element.dataset.pswpCaption
			}
		});

		lightbox.init();
	});
	let showTooltip = false;
	let tooltipText = 'This is a tooltip!';
</script>

<div class="flex items-center min-h-screen info-container">
	<div class="texts-container">
		{#each data.texts as text}
			<p class="text-container">{@html text}</p>
		{/each}
	</div>

	<div class="imgs-container pswp-gallery pswp-gallery--single-column" id="gallery-1">
		{#each data.images as image}
			<div class="flex items-center image-container">
				<a
					href={image.path}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					data-pswp-caption={image.desc}
				>
					<img class="img-container" src={image.path} alt={image.desc} />
				</a>
				<div class="image-title-container">
					<h2
						data-tooltip-target="tooltip-light"
						data-tooltip-style="light"
						class="mb-2 font-semibold text-gray-900 dark:text-white"
					>
						{image.title}
					</h2>
					<Tooltip text={image.src} />
				</div>
			</div>
		{/each}
	</div>
	<div class="links-container">
		<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Liens:</h2>
		<ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
			{#each data.links as link}
				<div class="link-container">
					<li>
						<a href={link.url} class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>{link.desc}</a
						>
					</li>
				</div>
			{/each}
		</ul>
	</div>
</div>

<style>
	.imgs-container {
		display: flex;
		gap: 40px;
	}
	.img-container {
		padding-top: 100px;
		max-height: 250px;
	}

	.texts-container {
		max-width: 50%;
		flex-direction: column;
		display: flex;
		gap: 10px;
	}
	.text-container {
		text-align: center;
	}

	.info-container {
		padding-top: 4rem;
		flex-direction: column;
		padding-bottom: 10%;
	}

	.image-container {
		flex-direction: column;
	}
	.image-title-container {
		display: flex;
		gap: 5px;
	}
	.links-container {
		padding-top: 50px;
	}
</style>
