<script>
  import groupIllustration from '$lib/assets/group.png';

</script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
>

<section class="about-section">
  <div class="side1">
    <span>
      About Us
    </span>
    <h1>
      Creative Powerhouse.
      Strategic Partner.
      Impact Ally.
    </h1>  
    <p>
      House of Kratos exists for people-driven brands that want to do more than make a profit — they want to make a difference. We work with social enterprises, NGOs, and forward-thinking brands to design creative and strategic solutions that catalyze transformation.
    </p>
  </div>
  <div class="side2">
    <img src="{groupIllustration}" alt="">
  </div>  
</section>  


<style lang="css">
  .about-section{
    display: flex;
    align-items: center;
    padding: 40px;
    gap: 40px;
    margin-top: 120px;
    border-radius: 50px;
    background: #ffc600;

  }
  span, h1, p{
        color: #161615;
  }


  .side1, .side2{
    flex-grow: 1;
    width: 50%;
  }

</style>