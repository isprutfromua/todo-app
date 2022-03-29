<script>
	import TodoListActions from './TodoListActions.svelte';
	import TodoItem from './TodoItem.svelte';
</script>

<div
	class="todos-container bg-white transition-color delay-400 duration-300 ease-linear  dark:bg-dark-blue-19 rounded-md overflow-hidden mt-4 mb-4 lg:mt-6">
	<ul class="flex flex-col">
		<li>
			<TodoItem />
		</li>
		<li>
			<TodoItem />
		</li>
		<li>
			<TodoItem />
		</li>
		<li>
			<TodoItem />
		</li>
		<li>
			<TodoItem />
		</li>
	</ul>
	<TodoListActions />
</div>

<style>
	.todos-container {
		box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
	}

	:global(.dark) .todos-container {
		box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
	}
</style>
