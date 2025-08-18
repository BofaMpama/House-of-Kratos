<script>
  import values from '$lib/data/values.json';
  import groupIllustration from '$lib/assets/group.png';
  import bulbman from '$lib/assets/idea.png';
  import workingBulbMen from '$lib/assets/teamwork.png';





</script>

<section class="about-section">
  <div class="side1">
    <span>
      About Us
    </span>
    <h1>
      Creative Powerhouse. <br/>
      Strategic Partner. <br/>
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
<section class="mv-section">

  <div class="mv-container">

      <div class="mv-box">
      <img src="{bulbman}" alt="Our Vision">
      <h2>Our Vision</h2>
      <p>To lead a global movement of strategic and creative innovation, transforming lives and shaping culture.</p>
 
    </div>
  
     <div class="mv-box">
      <img src="{workingBulbMen}" alt="Our Mission">
      <h2>Our Mission</h2>
      <p>To partner with visionary leaders to unlock innovative strategies that spark sustainable change.</p>
    </div>
  </div>

  </section> 
  <section class="values-section">
  <div class="text-container">
      <h2>Our Values</h2>
    <p>House of Kratos isn’t just a name – it’s a mission. These are the values that shape who we are.</p>

  </div>
    <div class="values-container">
    {#each values as value}
      <div class="value-box">
      <h3>{value.value}</h3>
      <p>{value.description}</p>
      </div>
    {/each}
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

  .mv-section{
    display: block;
    margin-top: 200px;

    h2{
      font-size: 40px;
      padding: 20px;
    }
  }
  .mv-container{
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .mv-box{
    border: 2px solid #ffc600;
    border-radius: 50px;
    box-shadow: 8px 8px #000000;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 400px;
    transition: 0.5s;

    img{
      width: 200px;
      height: 200px;
    }

    h2{
      text-align: left;
    }
    p{
      color: white;
    }
  }
      .mv-box:hover{
      	    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; padding: 0.8rem 1rem;
            transform: translateY(-10px);

    }
    .values-section{
            border: 2px solid #ffc600;
            border-radius: 50px;
            padding: 40px;
            margin-top: 200px;
    }
    .text-container{
      padding-top: 40px;

      h2{
        font-size: 60px;
        color: transparent;
        -webkit-text-stroke: 2px #ffc600;
      }
      p{
        color: white;
      }
    }
    .values-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 40px;
    }
    .value-box{
      width: 300px;
      height: 300px;
      padding: 40px 0 0 0;

      h3{
      font-size: 30px;
      color: #ffc600;
      }      
      p{
      color: aliceblue;
      }
    }
    @media (max-width: 900px){
      .mv-box{
        h2{
          text-align: center;
        }
      }
      .text-container {
        h2, p{
        text-align: center;
      }
    }

    .values-section{
      padding: 10px;
    }
      .value-box{
        width: 100%;
        height: auto;
        padding: 0px;
     
        h3, p{
          text-align: center;
        }
      }
    }
</style>