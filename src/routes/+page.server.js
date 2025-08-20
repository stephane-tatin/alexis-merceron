import datas from '$lib/data.json';
import { redirect } from '@sveltejs/kit';

export function load() {
	redirect('308', './situation-geopolitique');
	return {
		datas
	};
}
