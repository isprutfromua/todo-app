<script lang="ts">
	import { getDocs, query, where } from 'firebase/firestore';
	import { dbRef } from '../firebase/tools';

	import { todos, currentFilter, originTodos } from '../stores/todos';

	// let filterValues = async (filterQuery: string) => {
	// 	let filteredTodosQuery;
	// 	currentFilter.set(filterQuery);
	// 	switch (filterQuery) {
	// 		case 'active':
	// 			filteredTodosQuery = query(dbRef, where('done', '==', false));
	// 			break;
	// 		case 'completed':
	// 			filteredTodosQuery = query(dbRef, where('done', '==', true));
	// 			break;
	// 		case 'all':
	// 		default:
	// 			filteredTodosQuery = dbRef;
	// 			break;
	// 	}

	// 	const completedTodosSnapshot = await getDocs(filteredTodosQuery);

	// 	let filteredTodos = [];

	// 	completedTodosSnapshot.forEach(async (doc) => {
	// 		let todo = { ...doc.data(), id: doc.id };
	// 		filteredTodos = [...filteredTodos, todo];
	// 	});

	// 	$todos = filteredTodos;
	// };

	// filterValues($currentFilter);
	$: console.log($currentFilter);
	$: {
		if ($currentFilter === 'all') {
			$todos = $originTodos;
		} else if ($currentFilter === 'active') {
			$todos = $originTodos.filter(({ done }) => !done);
		} else if ($currentFilter === 'completed') {
			$todos = $originTodos.filter(({ done }) => done);
		}
	}
</script>

<div
	class="rounded-md justify-center bg-white transition-color delay-400 duration-300  ease-linear  dark:bg-dark-blue-19 flex items-center gap-x-5 text-sm  leading-none tracking-tight py-4 md:py-0 text-light-blue-61">
	<button
		on:click={() => {
			currentFilter.set('all');
		}}
		class:text-primary={$currentFilter == 'all'}
		class="hover:text-light-blue-35 dark:hover:text-light-blue-92 transition-colors font-bold duration-300 hover:cursor-pointer"
		>All</button>
	<button
		on:click={() => {
			currentFilter.set('active');
		}}
		class:text-primary={$currentFilter == 'active'}
		class="hover:text-light-blue-35 dark:hover:text-light-blue-92 transition-colors font-bold duration-300 hover:cursor-pointer"
		>Active</button>
	<button
		on:click={() => {
			currentFilter.set('completed');
		}}
		class:text-primary={$currentFilter == 'completed'}
		class="hover:text-light-blue-35 dark:hover:text-light-blue-92 transition-colors font-bold duration-300 hover:cursor-pointer"
		>Compeleted</button>
</div>
