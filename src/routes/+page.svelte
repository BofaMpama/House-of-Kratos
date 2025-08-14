<script lang="ts">
  import faq from '$lib/data/faq.json';
  import bulb from '$lib/assets/team-bulb.png';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import Carousel from '$lib/components/Carousel.svelte';
  import pic1 from '$lib/assets/creative-strategy.jpg';
  import pic2 from '$lib/assets/brand-strategy.jpg';
  import pic3 from '$lib/assets/content-strategy-development.jpg';
  import pic4 from '$lib/assets/social-impact-strategy.jpg';
  import pic5 from '$lib/assets/strategic-social-oversight.jpg';

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

    const questions = [
      {question: "What kind of brands do you work with?",
       answer: "We work with people-focused, impact-driven brands – especially social enterprises, NGOs, foundations, and innovative startups that care deeply about transforming lives and communities."
      }
    ];

</script>


<link rel="stylesheet" href="../header.css">
<link href="https://fonts.googleapis.com/css2?family=Milkyway&display=swap" rel="stylesheet">


<div class="section0" style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100dvh; border-radius: 50px;  gap: 40px; ">
  <span>Ideate. Connect. Create.</span>
  <h1 style="color: #ffc600; text-align:center;">Let's build the future together.</h1>
  <p>We are more than a creative agency — we are your partners in purpose.</p>
  <button class="outline btn" style="border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">Work with us</button>
</div>


<section class="section2">
  <div class="side1">
    
<span class="about-span">About Us</span>
<h2 style="font-size: 50px;">Creative Powerhouse<span class="dot">.</span><br/>
Strategic Partner<span class="dot">.</span><br/>
Impact Ally <span class="dot">.</span></h2>
<p>We work with people and organizations committed to solving problems sustainably.
</p>
  </div>

<div class="side2">
  

  <li>Visionary startups ready to disrupt the norm
</li>
<li> Purpose-driven founders who lead with empathy</li>
<li>Social enterprises & NGOs creating real, measurable impact</li>
<li>Forward-thinking teams who value creativity, strategy, and collaboration</li>
<li>People-first brands that care deeply about their communities</li>
<p>If any of these sound like you, we want to work with you!</p>
<button class="btn outline " style="width: 100%; border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">More About Us</button></div>
</section>


<section class="section3">
  <Carousel items = {cards} />
</section>

<div class="section4">
    <div class="side1">
    
<span class="about-span">FAQ</span>
<h2 style="font-size: 50px;">
  <span class="dot">F</span>requently
  <span class="dot">A</span>sked
  <span class="dot">Q</span>uestions</h2>
<p>We've compiled the answers to a couple questions we thought you might ask.
</p>
  </div>
  <div class="side2" style="">
      
    {#each faq as question }
      
    <details>
       <summary role="button" class="outline secondary">{question.question}</summary>
       <p>{question.answer}</p>
  </details>
    {/each}


</div>
</div>


<style lang="css">

*,::before,::after{
  margin: 0;
}
.section0{
  background: linear-gradient(rgba(36, 28, 1, 0.5), rgba(15, 12, 0, 0.904)), url(../lib/assets/brand-strategy.jpg);       
  margin-top: 150px;
  text-align: center;
  background-size: cover;
  color: #ffc600;
  transition: 0.5s;

  h1{
    font-size: 5em;
  }
 
}
.section0:hover{
  transform: scale(1.01);
      box-shadow: #ffc80018 0px 54px 55px, #ffc80018 0px -12px 30px, #ffc80009 0px 4px 6px, #ffc8001a 0px 12px 13px, #ffc80015 0px -3px 5px; padding: 0.8rem 1rem;
    
}



.section2{
  display: flex;
  margin-top: 200px;
  gap: 20px;




}
  .about-span{
    display: flex;
    justify-content: left;
    gap: 10px;
    align-items: center;
    position: relative;
    margin-left: -100px;
  }
  .about-span::before{
    content: " ";
    height: 2px;
    width: 100px;
    left: 0;
    background: #ffc600;
  }
 .side1, .side2{
  flex-grow: 1;
   display: flex;
  flex-direction: column;
  gap: 20px;
}

.dot{
  color: #ffc600;
}

  .section2 li{
    list-style: none;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 50px;
    gap: 20px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; padding: 0.8rem 1rem;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .section2 li:hover{
    box-shadow: #ffc80018 0px 54px 55px, #ffc80018 0px -12px 30px, #ffc80009 0px 4px 6px, #ffc8001a 0px 12px 13px, #ffc80015 0px -3px 5px; padding: 0.8rem 1rem;
    transform: scale(1.1);
  }
  .section2 li::before{
    content: " ";
    left: 0;
    width: 20px;
    height: 10px;
    border-radius: 20px;
    background: #ffc600;
    font-weight: bold;
    color: #ffc600;
  }


@keyframes reveal-img{
  50%{  
    translate: -150% 0;
    --angle: 0deg;
  }
}

.section3{
  max-width: 100%;
  width: 100%;
  margin: 200px 0 200px 0;
}

.section4{
  display: flex;
  gap: 20px;

  .side1, .side2{
    max-width: 50%; 
    width: 50%;
  }
}
.section4 h2{
  font-size: 50px;
  line-height: 60px;
  letter-spacing: 5px;
}


@media (max-width: 900px){
  .section0{
    h1{
      font-size: 4em;
    }
     h1,p{
    max-width: 80%;
  }

  }
    .section0:hover{
    transform: scale(1);
  }
  .section2 {
    flex-wrap: wrap;
  }
  .section2 li:hover{
    transform: scale(1.0202);
box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
 }
 .section4{
    flex-direction: column;
    gap: 40px;

    .side1, .side2{
      width: 100%;
      max-width: 100%;
    }
 }
}
@media (max-width: 600px){
  .section0{
    margin-top: 120px;
    h1{
      font-size: 3.8em;
    }
     h1,p{
    max-width: 90%;
  }

  }
  .section2 li{
    width: 100%;
  }
}
</style>