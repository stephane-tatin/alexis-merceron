import datas from '$lib/data.json';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
	if (!datas.map(d => d.path).includes(params.slug)) {
			redirect("308", "./situation-geopolitique")
	}
	return datas.find((data) => data.path === params.slug);
}
