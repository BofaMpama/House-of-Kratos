<script>
    import { onMount } from 'svelte';
    import Services from '$lib/data/services.json';
	  import ServicesCards from '$lib/components/ServicesCards.svelte';
</script>

<link rel="stylesheet" href="../app.css"> 
 

<section class="services-container">
  <div class="text-section">
    
<h2>What We Do</h2>
<p>Whether you’re launching something new, refining what you’ve built, or scaling to new heights, our services are designed to help you show up powerfully and purposefully.</p>

  </div>

  <div class="cards-section">
    {#each Services as service}
      <ServicesCards
        icon = {service.icon}
        title = {service.title}
        description = {service.description}
        link = {service.link}
      />
    {/each}
  </div>
 

</section>

<style lang="css">

  body{
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
  }

  h2 {
        font-size: 60px;
        color: transparent;
        -webkit-text-stroke: 2px #ffc600;
        margin-top: 5rem;
        text-align: center;
  }

  p {
    text-align: center;
    margin-top: 1rem;
  }

  .services-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

  }

  .cards-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    top: 15%;
    max-width: 100%;
    margin: 0 auto;
  }

  
</style>