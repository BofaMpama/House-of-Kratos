<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	import '../header.css';
	import favicon from '$lib/assets/logomark.jpg';
	import "@picocss/pico/css/pico.css";
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="container" style="">
	

		<Header />

	<main>
			{@render children()}
	</main>
		<Footer />

</div>


<style>
	main{
		margin-bottom: 200px;
	}
</style>