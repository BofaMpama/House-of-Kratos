<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import '../header.css';
	import favicon from '$lib/assets/logomark.jpg';
	import "@picocss/pico/css/pico.css";
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import CarouselCard from '$lib/CarouselCard.svelte';
	

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="container">
	<Header />

	<main>
			{@render children()}
	</main>
</div>

<style>

</style>