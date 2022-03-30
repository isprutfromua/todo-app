<script>
	import { todos } from '../stores/todos';
	import {
		query,
		where,
		getDocs,
		doc,
		deleteDoc,
		onSnapshot
	} from 'firebase/firestore';
	import { db, dbRef } from '../firebase/tools';
	import Filter from './Filter.svelte';

	let windowWidth;

	$: completedTodos = $todos.filter((todo) => todo.done).length;

	let deleteCompletedTodos = async () => {
		const completedTodos = query(dbRef, where('done', '==', true));
		const completedTodosSnapshot = await getDocs(completedTodos);

		completedTodosSnapshot.forEach(async (todo) => {
			await deleteDoc(doc(db, 'todos', todo.id));
		});
	};
</script>

<svelte:window bind:innerWidth={windowWidth} />

<footer
	class="grid bg-white text-light-blue-61
		px-5 py-4 grid-cols-2 md:grid-cols-3 gap-x-3 border-b text-sm  leading-none tracking-tight border-light-blue-92 dark:border-dark-blue-26 transition-color  dark:bg-dark-blue-19 delay-400 duration-300  ease-linear justify-self-start lg:px-6 lg:py-5">
	<p>{$todos.length} items left</p>

	{#if windowWidth >= 768}
		<div class="justify-self-center">
			<Filter />
		</div>
	{/if}

	<button
		class:opacity-0={completedTodos == 0}
		on:click={deleteCompletedTodos}
		class=" hover:cursor-pointer hover:text-light-blue-35 dark:hover:text-light-blue-92 justify-self-end ">
		Clear completed
	</button>
</footer>
