import type { Writable } from 'svelte/store';
import type { Data } from './data-model';

export function displayTitle(assets: Data[], navId: number) {
	return assets.find((d) => d.id === navId)?.title;
}

export function setActive(id: string, activeNavItem: Writable<number>, isOpen: Writable<boolean>) {
	activeNavItem.set(+id);
	isOpen.set(false);
}
