<script>
  export let icon;
  export let title;
  export let description;
  export let link;
</script>


    <div class="card">
      <div class="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} class="learn-more">Learn More →</a>
    </div>



<style>

    .card {
      background: transparent;
      border-radius: 16px;
      padding: 35px;
      width: 400px;
      border: 2px solid #ffc600;
      border-radius: 50px;
      box-shadow: 8px 8px #000000;
      transition: all 0.9s ease;
      cursor: pointer;
      position: relative;
    }

    .card:hover{
      	    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; 
            transform:rotate3d(1, 1, 0, 10deg);

    }

    .icon {
      font-size: 40px;
      color: #ffe44c;
      margin-bottom: 15px;
    }

    .card h3 {
      font-size: 22px;
      margin-bottom: 10px;
      color: #fff;
    }

    .card p {
      font-size: 16px;
      line-height: 1.6;
      color: #bbb;
      margin-bottom: 15px;
    }


    .learn-more {
      display: inline-block;
      margin-top: 10px;
      color: #d38d0a;
      font-weight: 500;
      text-decoration: none;
      transition: 0.3s;
    }

    .learn-more:hover {
      color: #fff;
    }


    @media (max-width: 450px) {
      .card {
        width: 100%;
        padding: 20px;
      }
    }

</style>