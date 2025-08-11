<script>
  import bannerImage from '$lib/assets/6.jpg';
  import idea1 from '$lib/assets/idea.png';
  import idea2 from '$lib/assets/idea2.png';
  import idea3 from '$lib/assets/puzzle.png';
  import idea4 from '$lib/assets/teamwork.png';

</script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.colors.min.css"
>

<section>

 <div class="container">
   <p>Ideate. Connect. Create.</p>
<h1>Let's <span>build</span> the <span>future</span> <span>together</span></h1>
<p>We are more than a creative agency — we are your partners in purpose.</p>
<button class="btn outline" style="border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">Work with us</button>
 </div>


    <div class="images">
    <div>    <img src="{idea2}" alt="" srcset=""></div>
    <div>    <img src="{idea4}" alt="" srcset="">  </div>
  
 
  <div><img src="{idea3}" alt="" srcset=""></div>
      <div><img src="{idea1}" alt="" srcset=""></div>

 </div>
</section>



<style lang="css">

.images{
  display: flex;
  gap: 30px;

  div{
    background: #191915;
      border-radius: 50%;
      padding: 20px;
  }
  img{
    width: 100px;
    height: 100px;
      animation: shake 2s infinite ease-in-out;
      

  }
  
}
/* Shake animation */
@keyframes shake {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  20% { transform: translate(-2px, 1px) rotate(-2deg); }
  40% { transform: translate(2px, -1px) rotate(2deg); }
  60% { transform: translate(-1px, 2px) rotate(-1deg); }
  80% { transform: translate(1px, -2px) rotate(1deg); }
}

section{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: last baseline;
  padding: 2em;
  gap: 50px;
  background: url({bannerImage});

  h1{
    font-size: 4rem;
    line-height: 4rem;
    margin: 0em 0 0.3em 0 ;
  }

  img{
    width: 500px;
    height: auto;
    object-fit: cover;
  }
  span{
    color: #ffc600;
  }
}

.banner-image {
  border-radius: 50px;
  object-fit: cover;
}

@media (max-width: 800px){
  .images{
    div{
    padding: 0px;
  }
  img{
    width: 60px;
    height: 60px;
  }
  }
}
</style>