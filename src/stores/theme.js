import { writable } from 'svelte/store';
import { browser } from '$app/env';

let themeValue;

if (browser) {
	const localStorageValue = localStorage.getItem('theme');
	themeValue = localStorageValue
		? localStorageValue
		: window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

export let theme = writable(themeValue);

theme.subscribe((value) => {
	let appContainer = browser && document.querySelector('.app-container');

	browser && localStorage.setItem('theme', value);
});
