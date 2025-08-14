<script>
    import Card from '$lib/components/Card.svelte';
    export let items = [];
    export let visibleCount = 3; // number of cards visible at once

    let currentIndex = 0;

    function prev() {
        currentIndex = Math.max(currentIndex - 1, 0);
    }

    function next() {
        const maxIndex = Math.max(items.length - visibleCount, 0);
        currentIndex = Math.min(currentIndex + 1, maxIndex);
    }
</script>

<div class="carousel-wrapper">
    <div
        class="carousel"
        style="transform: translateX(-{(currentIndex * (100 / visibleCount))}%);"
    >
        {#each items as item, index (index)}
            <Card
                image={item.image}
                heading={item.heading}
                subtext={item.subtext}
            />
        {/each}
    </div>

    <div class="carousel-nav">
        <button on:click={prev} disabled={currentIndex === 0}>
            &LeftAngleBracket;
        </button>
        <button class="btn">What we do</button>
        <button
            on:click={next}
            disabled={currentIndex >= items.length - visibleCount}
        >
            &RightAngleBracket;
        </button>
    </div>
</div>

<style>
    .carousel-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        align-items: center;
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    .carousel {
        display: flex;
        transition: transform 0.5s ease;
        width: 100%;
    }

    /* Card size based on visibleCount */
    .card {
        flex: 0 0 calc(100% / var(--visible-count, 3));
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
