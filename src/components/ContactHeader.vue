<template>
    <div class="header">
        <h1>Contact us</h1>
        <h2><span>Phone:</span> +1(720) 292-7117</h2>
        <h3>Others contacts see below</h3>
        <ul>
            <li>
                <a href="mailto:hello@ey-dev.com">
                    <svg fill="var(--blue-color)" width="50%" height="50%"  viewBox="0 0 24 24">
                        <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/EYesaulov/">
                    <svg fill="var(--blue-color)" width="50%" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/eydevelopment/">
                    <svg width="50%" fill="var(--blue-color)" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="">
                    <svg fill="var(--blue-color)" width="50%"  viewBox="0 0 24 24">
                        <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ContactHeader"
}
</script>

<style>
.header{
    width: 100%;
    height: 100%;
    background-image: url("../assets/background-img/pexels-bongkarn-thanyakij-3787911.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    flex: 1;
    padding-left: 25px;
    padding-right: 25px;
}
.header h1{
    position: absolute;
    right: 25px;
    top:75px;
    font-size: 50pt;
    color: var(--blue-color);
}
.header h2{
    position: absolute;
    right: 25px;
    top: 200px;
    font-size: 25pt;
    color: var(--blue-color);
}
.header h3{
    position: absolute;
    right: 25px;
    top: 250px;
    font-size: 18pt;
    color: var(--blue-color);
}
.header h2 span{
    font-size: 20pt;
}
.header ul{
    width: 100%;
    max-width: 600px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: inherit;
    top: 88%;
    list-style: none;
    padding-left: 25px;
    padding-right: 25px;
}
.header ul li{
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 15px;
    background-color: rgba(48,43,46,0.2);
}
.header ul li a{
    display: inherit;
    width: 100%;
    height: 100%;
}
.header ul li a svg{
    position: relative;
    top:25%
}
.header ul li a:hover svg{
    fill: var(--red-color);
}
@media only screen and (max-width: 960px){
    .header h1{
        font-size: 40pt;
        color: var(--blue-color);
    }
    .header h2{
        position: absolute;
        right: 25px;
        top: 170px;
        font-size: 18pt;
        color: var(--blue-color);
    }
    .header h3{
        top: 210px;
        font-size: 12pt;
    }
    .header h2 span{
        font-size: 13pt;
    }
}
@media only screen and (max-width: 800px){
    .header{
        width: 100%;
        height: 34%;
        background-image: url("../assets/background-img/pexels-bongkarn-thanyakij-3787911.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .header h1{
        position: absolute;
        right: 25px;
        top:75px;
        font-size: 30pt;
    }
    .header h2{
        top: 140px;
    }
    .header h3{
        opacity: 0;
    }
    .header ul{
        transform: translate(0, -65%);
    }
}
@media only screen and (max-width: 580px){
    .header h1{
        top:60px;
        font-size: 20pt;
    }
    .header h2{
        top: 90px;
        font-size: 10pt;
    }
    .header h3{
        opacity: 0;
    }
    .header h2 span{
        font-size: 8pt;
    }
    .massage-box h2{
        font-size: 16pt;
    }
    .header ul li{
        width: 25px;
        height: 25px;
        border-radius: unset;
        background-color: unset;
    }
    .header ul li a svg{
        width: 100%;
        height: 100%;
        position: unset;
        top:unset;
    }
}
</style>
