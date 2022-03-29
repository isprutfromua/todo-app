<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	interface TODO {
		action: string;
		done: boolean;
	}

	export let todo: TODO;
</script>

<div
	class="flex  transition-color delay-400 duration-300  ease-linear  px-5  items-center gap-x-3 border-b border-light-blue-92 dark:border-dark-blue-26 transition-colors todo-item  relative xl:px-6"
	class:done={todo.done}
	on:click>
	<p
		class="py-[14px] tracking-tight font-normal text-sm lg:text-lg lg:leading-none leading-4 w-full outline-none relative todo-text  grow-0 lg:py-5 hover:cursor-pointer">
		{todo.action}
	</p>
	<svg
		class="text-light-blue-92 dark:text-dark-blue-26  w-5 h-5 lg:w-6 lg:h-6 -order-1"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<circle
			class="transition delay-400 duration-300  ease-linear"
			cx="10"
			cy="10"
			r="9.5"
			fill="transparent"
			stroke="currentColor" />
		<circle
			class="transition delay-400 duration-300  ease-linear todo-circle"
			cx="10"
			cy="10"
			r="9.5"
			fill="transparent"
			stroke="url(#gradient)" />

		<g
			opacity={todo.done ? 1 : 0}
			class="transition-opacity delay-400 duration-300 ease-linear">
			<circle cx="10" cy="10" r="9.5" fill="url(#gradient)" />
			<path
				d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5"
				stroke="white"
				stroke-width="2" />
		</g>
		<defs>
			<linearGradient
				id="gradient"
				x1="-10"
				y1="10"
				x2="10"
				y2="30"
				gradientUnits="userSpaceOnUse">
				<stop stop-color="#55DDFF" />
				<stop offset="1" stop-color="#C058F3" />
			</linearGradient>
		</defs>
	</svg>

	<button
		class="appearance-none ml-auto"
		on:click|stopPropagation={() => dispatch('remove')}>
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z"
				fill="#494C6B" />
		</svg>
	</button>
</div>

<style>
	.todo-text {
		flex-basis: max-content;
	}

	.done .todo-text::after {
		width: 100%;
		opacity: 1;
	}

	.todo-circle {
		stroke-dasharray: 0 30;
	}

	@keyframes dash {
		to {
			stroke-dasharray: 30 0;
		}
	}
	.done .todo-circle,
	:not(.done).todo-text:hover + svg .todo-circle {
		animation: dash 400ms linear forwards;
	}

	.done {
		@apply text-light-blue-84;
	}

	:global(.dark) .done {
		@apply text-dark-blue-35;
	}

	.todo-text::after {
		content: '';
		height: 1px;
		background-color: currentColor;
		position: absolute;
		left: 0;
		top: 50%;
		width: 0%;
		opacity: 0;
		transition: 400ms ease-in-out;
		transition-property: opacity, width;
	}
</style>
