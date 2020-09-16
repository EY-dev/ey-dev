<template>
    <div id="Advantages" class="projects">
        <div class="phone-pic"/>
        <div class="advantages">
            <h2>A couple reasons why you should contact us:</h2>
            <v-divider dark style="margin-bottom: 25px;"/>
            <ul>
                <li v-for="(item, index) in cons" :key="index"> {{ item }} </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: "Projects",
    data : ()=> ({
        cons: [
            'We build modern Progressive Web Applications',
            'Your web app will work on any platforms',
            'We can design and develop data base and backend side for your CRM or CMS',
            'Our web solutions are fully functional and adaptive for mobile',
            'We can build api for third side web services or app',
            'You will have even offline access to the web app'
        ],
    }),
}
</script>

<style>
.projects{
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: var(--bg-dark);
    padding-top: 38px;
}
.phone-pic{
    flex: 1;
    background-image: url("../assets/phone.svg");
    background-size: 500px 500px;
    background-position: 50% 50%;
    max-width: 500px;
}
.advantages{
    flex: 1;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 25px 25px 25px 100px;
    max-height: 400px;
}
.advantages h2{
    opacity: 0;
    color: var(--white-color);
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-bottom: 15px;
    padding-top: 15px;
    transition: all 1.5s ease-in-out;
}
.advantages ul{
    list-style: none;
    padding: 25px;
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background-color: var(--white-color);
    border-radius: 10px;
    color: var(--bg-dark);
    max-width: 800px;
}
.active{
    opacity: 1!important;
    transform: scale(1, 1)!important;
}
@media only screen and (max-width: 1200px){
    .advantages h2{
        font-size: 1.5rem;
    }
    .advantages ul{
        font-size: 1rem;
    }
}
@media only screen and (max-width: 1000px){
    .phone-pic{
        background-size: unset;
    }
}
@media only screen and (max-width: 850px){
    .projects{
        display: block;
        padding-right: 25px;
        padding-left: 25px;
    }
    .phone-pic{
        opacity: 0;
        display: block;
        width: 100%;
        height: 25%;
        background-position: 50% 0;
        transition: all 1.5s ease-in-out;
    }
    .advantages{
        height: 75%;
        padding: 25px;
    }
    .advantages h2{
        text-align: center;
        font-size: 1.4rem;
    }
    .advantages ul{
        transform: scale(0.1, 0.1);
        padding: 15px;
        list-style: none;
        font-size: 1rem;
        background-color: var(--white-color);
        border-radius: 10px;
        color: var(--bg-dark);
        transition: all 1.5s ease-in-out;
        max-width: 480px;
        margin: auto;
    }
}
@media only screen and (max-width: 500px){
    .advantages h2{
        font-size: 1rem;
    }
    .advantages ul{
        font-size: 0.8rem;
        max-width: 480px;
    }
}
</style>
