<script>
    export let image;
    export let heading;
    export let subtext;
</script>

<div class="card">
    <img src="{image}" alt="{heading}">
   <div class="text">
     <h3>{heading}</h3>
    <p>{subtext}</p>
   </div>
</div>

<style>
    .card{
        position: relative;
        overflow: hidden;
        min-width: 500px;
        max-width: 500px;
        height: 300px;
        border-radius: 50px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;  
        flex-grow: 1;
        gap: 20px;
    }
   
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -100;
    }
    .text{
                padding: 0.5rem 0 0 0.95rem;
                position: absolute;
                bottom: 0px;
               width: 100%;
               
        }
    
    h3{
        font-size: 1.8rem;
        padding: 0.2rem;
        color: #f1f1f1;               
        text-shadow: 2px 2px black;

       
    }
    p{
        padding-bottom: 20px;
        text-shadow: 1px 1px #161615;
    }

    @media(max-width: 1000px){
        .card{
            min-width: 100%;
            max-width: 100%;
        }
    }
</style>