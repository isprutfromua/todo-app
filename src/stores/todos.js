import { browser } from '$app/env';
import { writable } from 'svelte/store';

export let todos = writable([]);
export let originTodos = writable([]);
