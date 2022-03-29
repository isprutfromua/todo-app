import { browser } from '$app/env';
import { writable } from 'svelte/store';

export let todos = writable([]);
export let originTodos = writable([]);

let storedFilter = browser && localStorage.getItem('filter');
let currentFilterValue = storedFilter === null ? 'all' : storedFilter;

if (browser && storedFilter === null) {
	console.log('setting filter');
	localStorage.setItem('filter', currentFilterValue);
}

export const currentFilter = writable(currentFilterValue);

currentFilter.subscribe((value) => {
	browser && localStorage.setItem('filter', value);
});
