<script>
    export let card;
</script>


  
<input type="radio" id="radio-1" name="radio-card" checked>
  <article class="card" style="--angle:4deg">
    <img class="card-img" src="{card.image}" alt="">
   <div class="card-data">
      <span class="card-num">{card.subheading}</span>
      <h2>{card.heading}</h2>
      <p>{card.paragraph}</p>
      <footer>
        <label for="radio-3" aria-label="Previous">&#10094;</label>
        <label for="radio-2" aria-label="Next">&#10095;</label>
      </footer>
    </div>
  </article>



<style>
  
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}
/* general styling */
*,::before,::after{
  margin: 0;
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

@media (900px < width){
  .card{
      --cards-grid-cols: var(--img-w) auto;
      --cards-grid-rows: auto;
      --cards-grid-gap: 4rem;
      --cards-footer-justify: start;
  }
}


.card-img{
  width: 300px;
  height: 300px;
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
  margin-top: 20px;
  cursor: pointer;
  pointer-events: var(--card-events, none);
  opacity: var(--data-opacity, 0);
  transition: color var(--duration) ease-in-out;
  color: var(--label-clr-txt,#ffffff);
  background-color:var(--label-clr-bg,transparent);
  border: 2px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  aspect-ratio: 1/1;
  display: grid;
  place-content: center;
  transition: background-color 900ms ease-in-out,color  300ms ease-in-out;
}


input:checked:focus-visible + .card > .card-data > footer label,
.card-data > footer label:hover{
  --label-clr-txt: #FFF;
  --label-clr-bg: #161615;
  transform: scale(1.1);
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

</style>  
