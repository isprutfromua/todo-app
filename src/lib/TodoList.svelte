<script lang="ts">
	// components
	import Dragger from '$lib/Dragger.svelte';
	import TodoListActions from '$lib/TodoListActions.svelte';
	import TodoItem from '$lib/TodoItem.svelte';
	// svelte utilities
	import { browser } from '$app/env';
	import { flip } from 'svelte/animate';
	import { slide, fade } from 'svelte/transition';
	// firebase
	import {
		onSnapshot,
		deleteDoc,
		updateDoc,
		doc,
		addDoc,
		getDocs
	} from 'firebase/firestore';
	import { dbRef, db } from '../firebase/tools';
	// stores
	import { originTodos, todos } from '../stores/todos';
	import { currentFilter } from '../stores/filter';

	let loadingData = true;
	const unsubscribe =
		browser &&
		onSnapshot(dbRef, (querySnapshot) => {
			let todosSnapshot = [];
			querySnapshot.forEach((doc) => {
				let todo = { ...doc.data(), id: doc.id };
				todosSnapshot = [...todosSnapshot, todo];
			});
			$todos = todosSnapshot;
			$originTodos = todosSnapshot;
			loadingData = false;
		});

	async function completeTodo(todo: TODO): void {
		await updateDoc(doc(db, 'todos', todo.id), {
			done: !todo.done
		});
	}

	async function removeTodo(id: number): void {
		await deleteDoc(doc(db, 'todos', id));

		reorderItems();
	}

	function sortTodos(todos: []) {
		return todos.sort((a, b) => a.order - b.order);
	}

	function reorderItems() {
		$todos.forEach(async (todo, i) => {
			await updateDoc(doc(db, 'todos', todo.id), {
				order: i + 1
			});
		});
	}

	async function dragHandler(e) {
		await todos.set(e.detail);
		reorderItems();
	}
</script>

<div
	class="todos-container bg-white transition-color delay-400 duration-300 ease-linear  dark:bg-dark-blue-19 rounded-md overflow-hidden mt-4 mb-4 lg:mt-6">
	{#if $todos.length}
		<ul class="flex flex-col">
			{#each sortTodos($todos) as todo (todo.id)}
				<li>
					<Dragger dataItem={todo} dataArray={$todos} on:sorted={dragHandler}>
						<TodoItem
							{todo}
							on:remove={() => removeTodo(todo.id)}
							on:click={() => completeTodo(todo)} />
					</Dragger>
				</li>
			{/each}
		</ul>
	{:else if !loadingData && $originTodos.length == 0}
		<p class="p-5 lg:px-6 lg:py-5">No todos</p>
	{:else if !loadingData && $todos.length == 0}
		<p class="p-5 lg:px-6 lg:py-5">No {$currentFilter} todos</p>
	{:else}
		<p class="p-5 lg:px-6 lg:py-5">Loading todos</p>
	{/if}
	{#if $originTodos.length > 0}
		<TodoListActions />
	{/if}
</div>

<style>
	.todos-container {
		box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
	}

	:global(.dark) .todos-container {
		box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
	}
</style>
