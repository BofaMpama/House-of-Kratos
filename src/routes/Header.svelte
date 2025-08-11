<script lang="ts">
	import {onMount} from 'svelte';
	import { page } from '$app/state';
	import logo from '$lib/assets/logomark.jpg';
	import menuBtn from '$lib/assets/menu-btn.png'
	import contactBtn from '$lib/assets/contact-us.png'


	
	let showNav = false;
	
</script>


<header style="@media (max-width: 600px) width: 100%; margin-left: 0; margin-right: 0;">
	
	
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	

	<button class="outline" style="width: 130px; height: 40px; font-size: 18px; ">Contact Us</button>
	<div class="corner">
		
			<img src={menuBtn} alt="MenuToggle" class="menuBtn" on:click={() => showNav = !showNav} />
	
	</div>		

	{#if showNav}
	<nav class="nav">
		
		<ul>
	
				<a href="/">Home</a>
			
			
				<a href="/about">About</a>

		
				<a href="/services">What We Do</a>
			
		</ul>
		
	</nav>	
	{/if}
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
        background: white;
        border-radius: 50px;
        margin: 1em;
		padding: 0.5em 1em 0.5em 1em;
        align-items: center;
	}

	.corner {
		width: 5em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3em;
		height: 3em;
		border-radius: 30px;
		object-fit: contain;
	}

	nav {
		position: absolute;
		width: 300px;
		background: white;
		z-index: 1000;
		min-height: fit-content;
		top: 20%;
		right: 7%;
		height: fit-content;
        border-radius: 50px;
		padding: 0.5em 0 0.5em 0;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		gap: 2em;
		padding: 1em;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: baseline;
		color: black;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: #161615;
	}
	nav.show{
		display: initial;
		z-index: 1000;
	}
	button{
		border-radius: 50px;
		font-size: 20px;
		background: #ffc600;
		border: none;
		color: white;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: auto;
	}
	@media (max-width: 600px){
		header{
			padding: 0.5em 0em;
		}
	}
</style>
