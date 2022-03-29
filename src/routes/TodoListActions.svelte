<script>
	import Filter from './Filter.svelte';

	let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<footer
	class="flex bg-white text-light-blue-61
		px-5 py-4 items-center justify-between gap-x-3 border-b text-sm  leading-none tracking-tight border-light-blue-92 dark:border-dark-blue-26 transition-color  dark:bg-dark-blue-19 delay-400 duration-300  ease-linear ">
	<p>5 items left</p>

	{#if windowWidth >= 768}
		<Filter />
	{/if}

	<p
		class=" hover:cursor-pointer hover:text-light-blue-35 dark:hover:text-light-blue-92">
		Clear completed
	</p>
</footer>
