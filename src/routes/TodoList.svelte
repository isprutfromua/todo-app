<script lang="ts">
	import TodoListActions from './TodoListActions.svelte';
	import TodoItem from './TodoItem.svelte';
	import { browser } from '$app/env';
	import { slide, fade } from 'svelte/transition';
	import { onSnapshot, deleteDoc, updateDoc, doc } from 'firebase/firestore';
	import { dbRef, db } from '../firebase/tools';
	import { currentFilter, originTodos, todos } from '../stores/todos';

	const unsubscribe =
		browser &&
		onSnapshot(dbRef, (querySnapshot) => {
			let fbTodos = [];
			querySnapshot.forEach((doc) => {
				let todo = { ...doc.data(), id: doc.id };
				fbTodos = [...fbTodos, todo];
			});
			$todos = fbTodos;
			$originTodos = fbTodos;
		});

	async function todoDone(todo: TODO) {
		await updateDoc(doc(db, 'todos', todo.id), {
			done: !todo.done
		});
	}

	async function removeTodo(id) {
		await deleteDoc(doc(db, 'todos', id));
	}
</script>

<div
	class="todos-container bg-white transition-color delay-400 duration-300 ease-linear  dark:bg-dark-blue-19 rounded-md overflow-hidden mt-4 mb-4 lg:mt-6">
	{#if $todos.length}
		<!-- content here -->
		<ul class="flex flex-col">
			{#each $todos as todo}
				<li>
					<TodoItem
						{todo}
						on:remove={() => removeTodo(todo.id)}
						on:click={() => todoDone(todo)} />
				</li>
			{/each}
		</ul>
	{:else if $originTodos.length == 0}
		<p class="p-5 lg:px-6 lg:py-5">No todos</p>
	{:else if $todos.length == 0}
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
