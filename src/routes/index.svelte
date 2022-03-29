<script>
	import TodoList from './TodoList.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import TodoInput from './TodoInput.svelte';
	import Filter from './Filter.svelte';

	let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<main class="lg:mx-auto mx-6 lg:max-w-container ">
	<Header />

	<TodoInput />

	<TodoList />

	{#if windowWidth < 768}
		<Filter />
	{/if}
</main>

<Footer />
