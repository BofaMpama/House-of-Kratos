<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<section>
    <div class="side1">
  <div class="side1">
    
<span class="about-span">Contact Us</span>
<h2 style="font-size: 50px;" data-aos="fade-up">Let's connect, we'd love to hear from you</h2>
<p>In case you have questions, business ideas, or want to get feedback on something, send us a message and we'll respond as quickly as possible.
</p>
  </div>
    </div>
    <div class="side2">
        <form action="" method="post" data-aos="fade-down">
    <input type="text" name="fname" placeholder="First name" required>
    <input type="text" name="lname" placeholder="Last name" required>
    <input type="email" name="email" id="" placeholder="email" required>
    <input type="text" name="subject" id="" placeholder="Subject" required>
    <textarea name="message" id="" cols="10" rows="6" placeholder="Write us a message" required></textarea>
    <input type="submit" value="Submit" style="background: transparent; 100%; border-radius: 50px; border-color: rgb(255, 191, 0); color: rgb(255, 191, 0);">
</form>
    </div>
</section>

<style>
    
    section{
        margin-top: 200px;
    }
    
    form{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        *{
            flex-grow: 1;
        }

       
    }
         input:nth-child(1), input:nth-child(2){
            flex-grow: 0.5;
            width: 200px;
        }

        @media (max-width: 900px){
              input:nth-child(1), input:nth-child(2){

            width: 100%;
        }
        }
</style>