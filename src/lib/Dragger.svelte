<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	import { draggableTodo } from '../stores/draggable';

	function dropHandler(e, todo) {
		dataArray = dataArray.map((t) => {
			if (t.id === todo.id) {
				return { ...t, order: $draggableTodo.order };
			}
			if (t.id === $draggableTodo.id) {
				return { ...t, order: todo.order };
			}

			return t;
		});

		dispatch('sorted', dataArray);

		removeActiveClass(e);
	}

	function removeActiveClass(e: DragEvent) {
		e.currentTarget.classList.remove('dragging');
	}

	function addActiveClass(e: DragEvent) {
		e.currentTarget.classList.add('dragging');
	}

	export let dataItem: TODO;
	export let dataArray: TODO[];
</script>

<div
	class="transition-none"
	draggable="true"
	on:dragstart={() => {
		draggableTodo.set(dataItem);
	}}
	on:dragend={removeActiveClass}
	on:dragleave={removeActiveClass}
	on:dragover|preventDefault={addActiveClass}
	on:drop|preventDefault={(e) => {
		dropHandler(e, dataItem);
	}}>
	<slot />
</div>

<style lang="postcss">
	@tailwind components;
	:global(.dragging) {
		@apply bg-dark-blue-85;
	}

	:global(.dark .dragging) {
		@apply bg-light-blue-35;
	}
</style>
