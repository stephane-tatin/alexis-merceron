import { assets } from '$lib';
export const prerender = true;
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
	if (!assets.map((d) => d.path).includes(params.slug)) {
		redirect('308', './situation-geopolitique');
	}
	return assets.find((asset) => asset.path === params.slug);
}
