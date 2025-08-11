<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

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