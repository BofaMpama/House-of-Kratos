<script lang="ts">
	import {onMount} from 'svelte';
	import { page } from '$app/state';
	import logo from '$lib/assets/logomark.jpg';
	import menuBtn from '$lib/assets/home-btn2.png';
	import contactBtn from '$lib/assets/contact-us.png'
	import meta from '$lib/assets/meta.png';
	import insta from '$lib/assets/insta.png';
	import linkedin from '$lib/assets/in.png';


	
	let showNav = false;
	
</script>


<header data-aos="zoom-out" style="@media (max-width: 600px) width: 100%; margin-left: 0; margin-right: 0;">
	
	
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>
	<div class="desktop-nav">
	
				<a href="/">Home</a>
			
			
				<a href="/about">About</a>

		
				<a href="/services">What We Do</a>
			
	</div>

	<div class="spacer"> </div>

	<div class="right-nav">
			<button class="outline contact-btn" style="width: 130px; height: 40px; font-size: 18px; ">Contact Us</button>	

	<div class="socials" style="">
				<img src="{meta}" alt="">
			<img src="{insta}" alt="">
			<img src="{linkedin}" alt="">
	</div>
	<div class="corner">
		
			<img src={menuBtn} alt="MenuToggle" class="menuBtn" on:click={() => showNav = !showNav} />
			
	
	</div>
		
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
		gap: 20px;
        background: rgba(100, 100, 100, 0.2);
		box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
		backdrop-filter: blur(12px);
        border-radius: 50px;
        margin: 1em;
		padding: 0.3em 1em 0.3em 1em;
        align-items: center;
		position: fixed;
		top: 0%;
		left: 5%;
		width: 90%;
		z-index: 100000;
	}

	.desktop-nav {

		display: flex;
		gap: 20px;
		a{
			text-decoration: none;
			color: white;
		}
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
		width: 400px;
		background: white;
		z-index: 1000;
		min-height: 100dvh;
		width: 400px;
		right: 0%;
		height: fit-content;
		padding: 0.5em 0 0.5em 0;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		gap: 0em;
		padding: 1em;
		text-align: left;
		width: 100%;
		flex-direction: column;
	}

	nav a {
		display: flex;
		height: 100%;
		color: black;
		font-weight: 700;
		font-size: 2em;
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
	.spacer{
		flex-grow: 1;
	}
	.right-nav{
		display: flex;
		gap: 20px;
		align-items: center;
		margin-left: auto;
	}
	.socials{
		display: flex; 
		gap: 10px;
	}
	.menuBtn{
		display: none;
	}

	@media (max-width: 900px){
		.desktop-nav{
			display: none;
		}
		.menuBtn{
			display: initial;
		}
		.socials{
			display: none;
		}
	}

	@media (max-width: 600px){
		header{
			padding: 0.5em 0em;
			width: 95%;
			left:2.5%;
			gap: none;
		}
		nav{
			width: 100%;
		}
	}
</style>
