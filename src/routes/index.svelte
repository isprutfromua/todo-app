<script>
	import TodoList from './TodoList.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import TodoInput from './TodoInput.svelte';
	import Filter from './Filter.svelte';
	import { addDoc } from 'firebase/firestore';
	import { dbRef } from '../firebase/tools';
	import { currentTodo } from '../stores/todoinput';

	let windowWidth;

	async function addTodo() {
		let todoValue = $currentTodo;
		currentTodo.set('');

		await addDoc(dbRef, {
			action: todoValue,
			done: false
		});
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<main class="lg:mx-auto mx-6 lg:max-w-container ">
	<Header />

	<TodoInput on:submit={addTodo} />

	<TodoList />

	{#if windowWidth < 768}
		<Filter />
	{/if}
</main>

<Footer />
