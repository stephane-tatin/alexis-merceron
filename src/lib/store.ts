import { writable } from 'svelte/store';

export const activeNavItem = writable(1);
export const isOpen = writable(false);
