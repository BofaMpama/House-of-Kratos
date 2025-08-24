<script lang="ts">
  import faq from '$lib/data/faq.json';
  import bulb from '$lib/assets/team-bulb.png';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import Carousel from '$lib/components/Carousel.svelte';

  export let services = "services";
  export let text1 = "Creative Strategy";
  export let text2 = "Brand Strategy";
  export let text3 = "Content Strategy & Development";
  export let text4 = "Social Impact Strategy";
  export let text5 = "Strategic Social Oversight";


  let x = 0, y = 0;

  function move(e){
    x = e.clientX;
    y = e.clientY;
  }
</script>


<link rel="stylesheet" href="../header.css">
<link href="https://fonts.googleapis.com/css2?family=Milkyway&display=swap" rel="stylesheet">

<div class="cursor" style="left: {x}px; top: {y}px;"></div>
<svelte:window on:mousemove={move} />

<div class="section0" style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100dvh; border-radius: 50px;  gap: 40px; ">
  <span>Ideate. Connect. Create.</span>
  <h1 style="color: #ffc600; text-align:center;">Let's build the future together.</h1>
  <p>We are more than a creative agency — we are your partners in purpose.</p>
  <a href="/contact-us">
  <button class="outline btn" style="border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">Work with us</button></a>
</div>


<section class="section2">
  <div class="side1">
    
<span class="about-span">About Us</span>
<h2 style="font-size: 50px;" data-aos="fade-up">Creative Powerhouse<span class="dot">.</span><br/>
Strategic Partner<span class="dot">.</span><br/>
Impact Ally <span class="dot">.</span></h2>
<p>We work with people and organizations committed to solving problems sustainably.
</p>
  </div>

<div class="side2">
  

<li data-aos="fade-down">Visionary startups ready to disrupt the norm
</li>
<li data-aos="fade-down"> Purpose-driven founders who lead with empathy</li>
<li data-aos="fade-down">Social enterprises & NGOs creating real, measurable impact</li>
<li data-aos="fade-down">Forward-thinking teams who value creativity, strategy, and collaboration</li>
<li data-aos="fade-down">People-first brands that care deeply about their communities</li>
<p>If any of these sound like you, we want to work with you!</p>
<button class="btn outline " style="width: 100%; border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">More About Us</button></div>
</section>


<div class="section3 carousel-section">
  <Carousel />
</div>

<section class="scroll-section">
  <div class="track0">
    <span>{text1}   //   {text2}   //   {text3}   //   {text4}   //   {text5}  //  </span>
    <span>{text1}   //   {text2}   //   {text3}   //   {text4}   //   {text5}  //  </span>
  </div>
  <div class="track1">
    <span>{text1}   //   {text2}   //   {text3}   //   {text4}   //   {text5}  //  </span>
    <span>{text1}   //   {text2}   //   {text3}   //   {text4}   //   {text5}  //  </span>
    
  </div>
</section>

<section class="section4">
    <div class="side1">
    
<span class="about-span"  data-aos="flip-left">FAQ</span>
<h2 data-aos="fade-up"  style="font-size: 50px;">
  <span class="dot" data-aos="flip-left">F</span>requently
  <span class="dot" data-aos="flip-left">A</span>sked
  <span class="dot" data-aos="flip-left">Q</span>uestions</h2>
<p>We've compiled the answers to a couple questions we thought you might ask.
</p>
  </div>
  <div class="side2" style="">
      
    {#each faq as question }
      
    <details data-aos="fade-down">
       <summary role="button" class="outline secondary">{question.question}</summary>
       <p>{question.answer}</p>
  </details>
    {/each}


</div>
</section>



<style lang="css">
  *{
    cursor:crosshair;
  }
  .cursor{
    position: fixed;
    height: 20px;
    width: 20px;
    border: 2px solid #ffc600;
    background: #ffc600;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.9s ease;
    box-shadow:  0 010px #161615, 0 0 20px #ffc600;
    z-index: 999999;
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
.dot{
      color: transparent;
        -webkit-text-stroke: 2px #ffc600;
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
  width: 100%;
  margin: 200px 0 200px 0;
  display: none;
}
section.scroll-section{
  padding: 200px 0 200px 0;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.track0{
  display: inline-flex;
  animation: scroll 10s linear infinite reverse;
}
.track0 span{
  color: #fff;
  font-size: 20px;
}
.track1{
  display: inline-flex;
  animation: scroll 30s linear infinite;
}
.track1 span{
  font-size: 60px;
  font-weight: bold;
  color: #ffc600;
}

@keyframes scroll{
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-50%);
  }
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