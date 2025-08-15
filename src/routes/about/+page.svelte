<script>
  let showBox = false;

  function popup(){
    showBox = !showBox;
  }
</script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
>

<h1>About Us</h1>
<p>This is the story of how we became...</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button on:click={popup}>click me</button>

{#if showBox}
<dialog open>
  <article>
    <header>
      <button aria-label="Close" rel="prev"></button>
      <p>
        <strong>🗓️ Thank You for Registering!</strong>
      </p>
    </header>
    <p>
      We're excited to have you join us for our
      upcoming event. Please arrive at the museum 
      on time to check in and get started.
    </p>
    <ul>
      <li>Date: Saturday, April 15</li>
      <li>Time: 10:00am - 12:00pm</li>
    </ul>
  </article>
</dialog> 
  <!-- <dialog open>
  <article>
    <h2>Confirm Your Membership</h2>
    <p>
      Thank you for signing up for a membership!
      Please review the membership details below:
    </p>
    <ul>
      <li>Membership: Individual</li>
      <li>Price: $10</li>
    </ul>
    <footer>
      <button class="secondary">
        Cancel
      </button>
      <button>Confirm</button>
    </footer>
  </article>
</dialog> -->
{/if}
<style lang="css">
  

  nav {
    background-color: #f0f0f0;
    padding: 1rem;
    text-align: center;

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }
    a {
      margin: 0 1rem;
      color: #333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  h1 {
    text-align: center;
    margin-top: 2rem;
  }

  p {
    text-align: center;
    margin-top: 1rem;
  }

</style>