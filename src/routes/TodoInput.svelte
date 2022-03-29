<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { currentTodo } from '../stores/todoinput';
	const dispatch = createEventDispatcher();
</script>

<form on:submit|preventDefault>
	<label
		class="flex bg-white transition-color delay-100 duration-500 ease-linear  dark:bg-dark-blue-19 px-5  items-center gap-x-3 border-b border-light-blue-92 dark:border-dark-blue-26 rounded-md dark:text-dark-blue-52 xl:px-6">
		<svg
			class="text-light-blue-92 dark:text-dark-blue-26 shrink-0 w-5 h-5 lg:w-6 lg:h-6"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<circle
				class="transition-colors delay-100 duration-500 ease-linear"
				cx="10"
				cy="10"
				r="9.5"
				fill="transparent"
				stroke="currentColor" />
		</svg>

		<input
			type="text"
			bind:value={$currentTodo}
			placeholder="Create a new todo…"
			class="py-[14px] gap-x-3 placeholder:font-light-grey-82 tracking-tight bg-transparent font-normal text-sm lg:text-lg lg:leading-none leading-4	w-full outline-none lg:py-5" />
	</label>
</form>
