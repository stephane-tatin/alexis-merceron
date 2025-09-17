import { writable } from 'svelte/store';

export const activeNavItem = writable(0);
export const isOpen = writable(false);
