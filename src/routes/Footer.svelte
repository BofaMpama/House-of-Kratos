<script>
    import logo from '$lib/assets/yellow-main-logo.png';
    import meta from '$lib/assets/meta.png';
	import insta from '$lib/assets/insta.png';
	import linkedin from '$lib/assets/in.png';
</script>

<footer>
            <div class="footer-left">
               <img src="{logo}" alt="House of Kratos">
               <p>Ideate. Connect. Create.</p>
            </div>
            <div class="footer-quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/sevices">What We Do</a>
                    <a href="/contact">Contact Us</a>
                </ul>
            </div>
            <div class="footer-contact-info">
                <h3>Contact Us</h3>
                <p>+234 905 318 1884</p>
                <p>hello@houseofkratos.com</p>
                <p>8 Providence Street, Lekki Phase One, Lagos</p>
            </div>
            <div class="footer-right">
                <div class="follow-us-text">
                    <h3>Follow Us</h3>
                </div>    
                <div class="social-media-icons">
                    <img src="{meta}" alt="Facebook" />                    
                    <img src="{insta}" alt="Instagram"/>
                    <img src="{linkedin}" alt="LinkedIn"/>
                </div>
            </div>
            <div class="copyright-text w-90">
                <p>&copy; Copyright House of Kratos 2025. </p>
            </div>
            </footer>


            <style lang="css">
                footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: top;
    background: black;
    border-radius: 50px;
    color: var(--background);
    padding: 40px;
    margin-bottom: 50px;
    gap: var(--spacing5);

    .logo{
        color: var(--colorDefault2);
    }
    h3{
        line-height: 50px;
        color: var(--colorDefault2)
    }
}
.footer-left{
    flex: 1.5;

    img{
        width: 220px;
        height: 100px;
    }
}
.footer-quick-links{
    display: flex;
    flex: 1;
    flex-direction: column;
}
.footer-quick-links ul{
        display: flex;
        flex-direction: column;
        gap: 15px;
        a{
        color: var(--background);            
        text-decoration: none;

        }
        a:hover{
            color: var(--colorDefault2);
        }
    }
.footer-contact-info{
    flex: 1;
}    
.footer-right{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    align-items: center;
}
.social-media-icons{
    display: flex;
    flex:1;
    gap: 20px;

    *{
        width: 25px;
        height: 25px;
    }
}
.copyright-text{
    min-width: max-content;
    width: 100%;
    padding-top: 20px;
}

@media (max-width: 900px){
      footer{
        max-width: 100%;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 40px;
        padding: 20px;
        .logo{
            margin-left: 0;
        }
    }
    .footer-right{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .copyright-text{
        width: 80%;
        max-width: 80%;
        text-align: center;
    }
}
@media (max-width: 600px){

}

            </style>