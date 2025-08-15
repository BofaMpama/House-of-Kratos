<script>
    import Card from '$lib/components/Card.svelte';
    import pic1 from '$lib/assets/creative-strategy.jpg';
    import pic2 from '$lib/assets/brand-strategy.jpg';
    import pic3 from '$lib/assets/content-strategy-development.jpg';
    import pic4 from '$lib/assets/social-impact-strategy.jpg';
    import pic5 from '$lib/assets/strategic-social-oversight.jpg';

    let currentIndex = 0;

    const cards = [
        { image: pic1, heading: 'Creative Strategy', subtext: 'Transforming visions into tangible, innovative solutions.' },
        { image: pic2, heading: 'Brand Strategy', subtext: 'Crafting timeless identities with purpose and clarity.' },
        { image: pic3, heading: 'Content Strategy & Development', subtext: 'Stories that inspire, connect, and convert.' },
        { image: pic4, heading: 'Social Impact Strategy', subtext: 'Driving meaningful change with actionable plans.' },
        { image: pic5, heading: 'Strategic Social Oversight', subtext: 'Guiding influence with integrity and insight.' }
    ];

    function prev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }

    function next() {
        currentIndex = (currentIndex + 1) % cards.length;
    }
</script>

<section>
    <div class="carousel-wrapper">
        <div class="carousel" style="transform: translateX(-{currentIndex * 100}%)">
            {#each cards as card}
                <div class="carousel-card">
                    <Card image={card.image} heading={card.heading} subtext={card.subtext} />
                </div>
            {/each}
        </div>
    </div>

    <div class="carousel-nav">
        <button class="nav-btn" on:click={prev}>&larr;</button>
        <button class="btn">What we do</button>
        <button class="nav-btn" on:click={next}>&rarr;</button>
    </div>
</section>

<style>
    .carousel-wrapper {
        overflow: hidden;
        margin: auto;
        width: 70%;
        max-width: 1200px;
        position: relative;
    }

    .carousel {
        display: flex;
        transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .carousel-card {
        flex: 0 0 100%;
        display: flex;
        justify-content: center;
        padding: 1rem;
    }

    /* CARD STYLING */
    :global(.card) {
        position: relative;
        overflow: hidden;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(15px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        cursor: pointer;
    }

    :global(.card:hover) {
        transform: scale(1.03);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    }

    :global(.card img) {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -2;
        transition: transform 0.6s ease;
    }

    :global(.card:hover img) {
        transform: scale(1.1);
    }

    :global(.card::before) {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(160deg, rgba(0,0,0,0.6) 20%, rgba(255,191,0,0.2) 100%);
        z-index: -1;
    }

    :global(.card h3) {
        font-size: 2rem;
        font-weight: 700;
        color: #ffc600;
        margin-bottom: 0.3rem;
    }

    :global(.card p) {
        color: #f1f1f1;
        font-size: 1rem;
        max-width: 80%;
    }

    /* NAVIGATION */
    .carousel-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        gap: 1rem;
    }

    .nav-btn {
        border: none;
        padding: 0.7rem 1.2rem;
        font-size: 1.5rem;
        color: #ffc600;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 50px;
        backdrop-filter: blur(10px);
        cursor: pointer;
        transition: background 0.3s ease, transform 0.2s ease;
    }

    .nav-btn:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: scale(1.1);
    }

    .btn {
        padding: 0.8rem 2rem;
        font-size: 1rem;
        border: 2px solid #ffc600;
        background: transparent;
        color: #ffc600;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn:hover {
        background: #ffc600;
        color: #000;
    }

    @media (max-width: 900px) {
        .carousel-wrapper {
            width: 100%;
        }
        :global(.card h3) {
            font-size: 1.5rem;
        }
        :global(.card p) {
            font-size: 0.9rem;
        }
    }
</style>
