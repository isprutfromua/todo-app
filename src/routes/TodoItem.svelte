<div
	class="flex  transition-color delay-400 duration-300  ease-linear  px-5  items-center gap-x-3 border-b border-light-blue-92 dark:border-dark-blue-26 transition-colors  hover:text-light-blue-84 dark:hover:text-dark-blue-35 todo-item hover:cursor-pointer relative xl:px-6">
	<svg
		class="text-light-blue-92 dark:text-dark-blue-26  w-5 h-5 lg:w-6 lg:h-6"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
			fill="transparent" />
		<path
			class="transition-colors delay-400 duration-300  ease-out"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
			fill="currentColor" />
		<g opacity="0" class="marked-icon transition-opacity duration-500 ease-out">
			<circle cx="10" cy="10" r="10" fill="url(#gradient)" />
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
	<p
		class="py-[14px] tracking-tight font-normal text-sm lg:text-lg lg:leading-none leading-4	w-full outline-none relative todo-text  grow-0 lg:py-5">
		Complete online JavaScript course
	</p>
	<button class="appearance-none ml-auto">
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
	.todo-item:hover .marked-icon {
		opacity: 1;
	}

	.todo-text {
		flex-basis: max-content;
	}

	.todo-item:hover .todo-text::after {
		width: 100%;
		opacity: 1;
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
