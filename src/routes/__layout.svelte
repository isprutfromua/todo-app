<script>
	import '../app.css';
	let visible = false;
	import { fade } from 'svelte/transition';
	import { theme } from '../stores/theme';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	onMount(() => {
		visible = true;
	});
</script>

<div class="app-container {$theme} ">
	{#if visible}
		<div class="app" in:fade={{ delay: 200, duration: 500 }}>
			<slot />
		</div>
	{:else}
		<div
			class="w-16 h-16 rounded-full border-8 border-y-dark-blue-43  border-x-slate-300 animate-spin  " />
	{/if}
</div>

<style lang="postcss">
	.app-container {
		@apply min-h-screen grid place-items-center;
	}
	.app {
		@apply bg-no-repeat bg-small font-normal min-h-screen leading-none  lg:bg-large w-full delay-700 duration-500 ease-linear;

		--dark-gradient: linear-gradient(
			135deg,
			rgba(55, 16, 189, 50%) 0%,
			rgba(164, 35, 149, 50%) 100%
		);
		--light-gradient: linear-gradient(
			225deg,
			rgba(85, 150, 255, 50%) 0%,
			rgba(172, 45, 235, 50%) 100%
		);
		transition-property: background-color, background-image;
	}

	:global(.dark) .app {
		background-image: var(--dark-gradient), url('images/dark.webp');
		@apply bg-dark-blue-11 text-dark-blue-85;
	}

	:global(.light) .app {
		background-image: var(--light-gradient), url('images/light.webp');
		@apply bg-light-gray text-light-blue-35;
	}
</style>
