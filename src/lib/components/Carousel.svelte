<script>
// @ts-nocheck

    import Card from '$lib/components/Card.svelte';
  import pic1 from '$lib/assets/creative-strategy.jpg';
  import pic2 from '$lib/assets/brand-strategy.jpg';
  import pic3 from '$lib/assets/content-strategy-development.jpg';
  import pic4 from '$lib/assets/social-impact-strategy.jpg';
  import pic5 from '$lib/assets/strategic-social-oversight.jpg';

    let currentIndex = 0;
    function prev(){
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }

    function next(){
        currentIndex = (currentIndex + 1) % cards.length;
    }

       const cards = [
          {image: pic1,
           heading: 'Creative Strategy'
          },
          {image: pic2,
           heading: 'Brand Strategy'
          },
          {image: pic3,
           heading: 'Content Strategy & Development'
          }, 
          {image: pic4,
           heading: 'Social Impact Strategy'
          },
          {image: pic5,
           heading: 'Strategic Social Oversight'
          }
    ];
   
</script>

<section>
    <div class="carousel-wrapper">
        <div class="carousel" style="transform: translateX(-{currentIndex * 100}%)">
            {#each cards as card, i}
                    <div class="card">
                        <Card
                    image={card.image}
                    heading={card.heading}
                />
                    </div>
            {/each}
        </div>
    </div>

    <div class="carousel-nav">
        <button on:click={prev}>Prev</button>
        <button class="btn">What we do</button>
        <button on:click={next}>Next</button>
    </div>

</section>
    
        
   
    


<style>
    .carousel-wrapper {
        
   

        overflow: hidden;
        margin: auto;
        width: 50%;
    }

    .carousel {
        display: flex;
        transition: transform 0.5s ease;
    }

    /* Card size based on visibleCount */
    .card {
        flex: 0 0 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .carousel-nav {
        display: flex;
        gap: 20px;
    }

    .carousel-nav .btn {
        background: transparent;
        font-size: 20px;
        padding: 25px;
        width: 100%;
        border-radius: 50px;
        border: 2px solid rgb(255, 191, 0);
        color: rgb(255, 191, 0);
    }

    .carousel-nav button {
        border: 2px solid #ffc600;
        border-radius: 50px;
        color: #ffc600;
        font-size: 20px;
        padding: 1rem;
        cursor: pointer;
        background: transparent;
    }

    .carousel-nav button:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
</style>
