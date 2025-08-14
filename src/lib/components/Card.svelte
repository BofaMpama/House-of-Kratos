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
        position: relative;
        overflow: hidden;
        min-width: 250px;
        max-width: 300px;
        height: 250px;
        margin: 0 1rem;
        border-radius: 50px;
        background: linear-gradient(rgba(36, 28, 1, 0.5), rgba(15, 12, 0, 0.904));
        box-shadow: 0 4px 8px rgba(0,0,0,0.9);
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:end;
        gap: 20px;
    }
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -100;
    }
    h3{
        font-size: 1.8rem;
        margin: 0.5rem 0 0 0.95rem;
        padding: 0.2rem;
        color: #f1f1f1;
        position: absolute;
        bottom: 20px;
    }
</style>