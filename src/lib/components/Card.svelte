<script>
    export let image;
    export let heading;
    export let subtext;
</script>

<div class="card">
    <img src="{image}" alt="{heading}">
    <h3>{heading}</h3>
    <p>{subtext}</p>
</div>

<style>
    .card{
        min-width: 250px;
        max-width: 300px;
        margin: 0 1rem;
        padding: 1rem;
        border-radius: 50px;
        background: white;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        flex-shrink: 0;
    }
    img{
        width: 100px;
        height: 100px;
    }
    h3{
        font-size: 1.5rem;
        margin: 0.5rem 0  0.25rem;
        color: #161615;
    }
    p{
        font-size: 0.9rem;
        color: #949599;
    }
</style>