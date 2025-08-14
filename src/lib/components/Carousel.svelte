<script >
    import Card from '$lib/components/Card.svelte';
    export let items = [];

    let currentIndex = 0;

    function prev(){
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }

    function next(){
        currentIndex = (currentIndex + 1) % items.length;
    }
</script>

<div class="carousel-wrapper">
    <div class="carousel">
        {#each items as item, index}
            <Card 
                image="{item.image}"
                heading="{item.heading}"
                subtext="{item.subtext}"
            />
        {/each}
    </div>

   <div class="carousel-nav">
     <button on:click="{prev}"> &LeftAngleBracket; </button>
    <button class="btn">What we do</button>
    <button on:click="{next}"> &RightAngleBracket; </button>
   </div>
</div>

<style lang="css">
    .carousel-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        align-items: center;
        position: relative;
        overflow: hidden;
    }
    .carousel{
        display: flex;
        justify-content: center;
        transition: transform 0.5s ease;
        width: 100%;
    }    
    .carousel-nav{
        display: flex;
        gap: 20px;
    }
    .carousel-nav button{
        border: 2px solid #ffc600;
        border-radius: 50px;
        color: white;
        font-size: 20px;
        padding: 1rem;
        cursor: pointer;
    }    
    .btn{
        background: #ffc600;
    }
</style>