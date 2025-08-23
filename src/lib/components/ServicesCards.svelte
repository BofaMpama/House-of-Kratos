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

    .services {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .card {
      background: #222120;
      border-radius: 16px;
      padding: 35px;
      width: 400px;
      border: 2px solid #ffc600;
      border-radius: 50px;
      box-shadow: 8px 8px #000000;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 25px rgba(251, 255, 0, 0.4);
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
</style>