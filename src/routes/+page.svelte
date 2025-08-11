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
<link rel="stylesheet" href="../header.css">



<section class="section cards">

  <input type="radio" id="radio-1" name="radio-card" checked>
  <article class="card" style="--angle:4deg">
    <img class="card-img" src="{idea4}">
   <div class="card-data">
      <span class="card-num">Ideate. Connect. Create.</span>
      <h2>Let's build the future together</h2>
      <p>We are more than a creative agency — we are your partners in purpose.</p>
      <button class="btn outline " style="width: 200px; border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">Work with us</button>
      <footer>
        <label for="radio-7" aria-label="Previous">&#10094;</label>
        <label for="radio-2" aria-label="Next">&#10095;</label>
      </footer>
    </div>
  </article>

  <!-- card 2 -->
  <input type="radio" id="radio-2" name="radio-card">
  <article class="card" style="--angle:-8deg">
    <img class="card-img" src="{idea2}">
    <div class="card-data">
      <span class="card-num">Ideate. Connect. Create.</span>
      <h2>One Idea at a Time</h2>
      <p>We'll partner with you to birth that big idea in your brain to life.</p>
      <button class="btn outline" style="width: 200px; border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">Work with us</button>
      <footer>
        <label for="radio-1" aria-label="Previous">&#10094;</label>
        <label for="radio-3" aria-label="Next">&#10095;</label>
      </footer>
    </div>
  </article>

  <!-- card 3 -->
    <input type="radio" id="radio-3" name="radio-card">
  <article class="card" style="--angle:-7deg">
    <img class="card-img" src="{idea3}">
    <div class="card-data">
      <span class="card-num">Ideate. Connect. Create.</span>
      <h2>We'll piece the puzzle together</h2>
      <p>Making sure everything makes sense and that those abstract ideas come together.</p>
      <button class="btn outline" style="width: 200px; border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">Work with us</button>
      <footer>
        <label for="radio-2" aria-label="Previous">&#10094;</label>
        <label for="radio-4" aria-label="Next">&#10095;</label>
      </footer>
    </div>
  </article>

  <!-- card 4 -->
    <input type="radio" id="radio-4" name="radio-card">
  <article class="card" style="--angle:11deg">
    <img class="card-img" src="{idea1}">
    <div class="card-data">
      <span class="card-num">Ideate. Connect. Create.</span>
      <h2>We help you in your quest to help others.</h2>
      <p>We work especially with those like you who are determined to grow and stay loyal to their core values.</p>
      <button class="btn outline" style="width: 200px; border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">Work with us</button>
      <footer>
        <label for="radio-3" aria-label="Previous">&#10094;</label>
        <label for="radio-5" aria-label="Next">&#10095;</label>
      </footer>
    </div>
  </article>


 
</section>

<style>

*,::before,::after{
  margin: 0;
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}
/* general styling */
html {
  }
img{
  max-width: 100%;
}
/* Hide radio buttons */
input[type="radio"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}



.cards{
  --img-w: 400px;
  --duration: 300ms;
  --img-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  margin-top: 50px;
  margin-bottom: 200px;
  width: 100%;
  margin-inline: auto;
  display: grid;
  
  counter-reset: my-counter;
}

.card{
  --cards-grid-cols: auto;
  --cards-grid-rows: var(--img-w) auto;
  --cards-grid-gap: 2rem;
  --cards-footer-justify: center;
  
  grid-area: 1/1;
  display: grid;
 place-items: center; 
  grid-template-columns: var(--cards-grid-cols);
  grid-template-rows: var(--cards-grid-rows);
  gap: var(--cards-grid-gap);
  
}
article{
  padding: 35px;
  border-radius: 50px;
}

@media (600px < width){
  .card{
      --cards-grid-cols: var(--img-w) auto;
      --cards-grid-rows: auto;
      --cards-grid-gap: 4rem;
      --cards-footer-justify: start;
  }
}


.card-img{
  width: 400px;
  height: 400px;
  aspect-ratio: 1 / 1 ;
  rotate: var(--angle, 0deg);
  border-radius: 10px;
  border: 3px solid #FFF;
  overflow: hidden;
  transform-origin: center;
  object-fit: cover;

}



input:nth-of-type(1):checked + .card ~ .card > .card-img{
  animation: straighten-img-1 calc(var(--duration) * 2) forwards;
  animation-timing-function: var(--img-easing);
}
.card:has(~input:nth-of-type(2):checked) > .card-img,
input:nth-of-type(2):checked + .card ~ .card > .card-img{
  animation: straighten-img-2 calc(var(--duration) * 2) forwards;
  animation-timing-function: var(--img-easing);
}
.card:has(~input:nth-of-type(3):checked) > .card-img,
input:nth-of-type(3):checked + .card ~ .card > .card-img{
  animation: straighten-img-3 calc(var(--duration) * 2) forwards;
  animation-timing-function: var(--img-easing);
}
.card:has(~input:nth-of-type(4):checked) > .card-img,
input:nth-of-type(4):checked + .card ~ .card > .card-img{
  animation: straighten-img-4 calc(var(--duration) * 2) forwards;
  animation-timing-function: var(--img-easing);
}
/* as CSS can't remove animations, we change the animation according to which checkbox is checked  - all animations are the same (would be simpler with SCSS) */
@keyframes straighten-img-1 { 50%{ --angle: 0deg;} }
@keyframes straighten-img-2 { 50%{ --angle: 0deg;} }
@keyframes straighten-img-3 { 50%{ --angle: 0deg;} }
@keyframes straighten-img-4 { 50%{ --angle: 0deg;} }


/* stacking order - these are updated according to which card is selected */
.card{
  z-index: -1;
}
input:checked + .card{
  z-index:10 !important;
}
/* next card checked - place behind */
.card:has(+input:checked){
  z-index:9;
}
/* next card +1 checked - place behind */
.card:has(+input + .card + input:checked){
  z-index:8;
}
/* next card +2 checked - place behind */
.card:has(+input + .card +input + .card + input:checked){
  z-index:7;
}
/* next card +3 checked - place behind */
.card:has(+input + .card +input + .card +input + .card + input:checked){
  z-index:6;
}
/* next card +4 checked - place behind */
.card:has(+input + .card +input + .card +input + .card +input + .card + input:checked){
  z-index:5;
}


.card-data{
  display: grid;
  gap: 1rem;
}
.card-data > .card-num{
  opacity: var(--data-opacity, 0);
  font-size: .8rem;
  color: #666;
}
.card-data > p{
  font-size: 0.9rem;

}
.card-data > h2,
.card-data > p{
  transition: var(--duration) ease-in-out;
  transition-delay: var(--data-delay,0ms);
  opacity: var(--data-opacity, 0);
  translate: 0 var(--data-y, 20px);
}
.card-data > footer{
  display: flex;
  justify-content: var(--cards-footer-justify);
  gap: 2rem;
}
.card-data > footer label{
  margin-block-start: auto;
  cursor: pointer;
  pointer-events: var(--card-events, none);
  opacity: var(--data-opacity, 0);
  transition: color var(--duration) ease-in-out;
  color: var(--label-clr-txt,#000);
  background-color:var(--label-clr-bg,#EEE);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  aspect-ratio: 1/1;
  display: grid;
  place-content: center;
  transition: background-color 300ms ease-in-out,color  300ms ease-in-out;
}


input:checked:focus-visible + .card > .card-data > footer label,
.card-data > footer label:hover{
  --label-clr-txt: #FFF;
  --label-clr-bg: steelblue;
}

input:checked + .card{
  --data-opacity: 1;
  --data-y: 0;
  --data-delay: var(--duration);
  --card-events: auto;
  transition: z-index;
  transition-delay: 300ms;
  /*z-index: 1;*/
}

input:checked +.card > .card-img{
  animation: reveal-img calc(var(--duration) * 2) forwards;
}

@keyframes reveal-img{
  50%{  
    translate: -150% 0;
    --angle: 0deg;
  }
}

</style>