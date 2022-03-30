<script>
	import TodoList from './TodoList.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import TodoInput from './TodoInput.svelte';
	import Filter from './Filter.svelte';
	import { addDoc } from 'firebase/firestore';
	import { dbRef } from '../firebase/tools';
	import { currentTodo } from '../stores/todoinput';
	import { originTodos } from '../stores/todos';

	let windowWidth;
	let error = false;

	async function addTodo(e) {
		let todoValue = $currentTodo;
		currentTodo.set('');

		if (todoValue && !$originTodos.some((el) => el.action === todoValue)) {
			await addDoc(dbRef, {
				action: todoValue,
				done: false,
				order: $originTodos.length + 1
			});
		} else {
			error = true;
			setTimeout(() => (error = false), 2000);
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<main class="lg:mx-auto mx-6 lg:max-w-container ">
	<Header />

	<TodoInput {error} on:submit={addTodo} />

	<TodoList />

	{#if windowWidth < 768}
		<Filter />
	{/if}
</main>

<Footer />
