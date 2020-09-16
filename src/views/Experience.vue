<template>
    <div id="Experience" class="experience">
        <div class="top">
            <div class="main-block">
                <img src="../assets/background-img/code.svg" class="code-img">
                <div class="title">
                    <h1>We build</h1>
                    <h2>custom websites and progressive web applications using modern framework vue.js</h2>
                </div>
            </div>
        </div>
        <div class="bottom">
            <carousel :perPageCustom="[[200, 1], [850, 2], [1275, 3], [1700, 4], [2125, 5]]" :scrollPerPage="true" :mouse-drag="true">
                <slide v-for="(item,i) in projects" :key="i">
                    <project-card :project="item" :index="i" @open-project="openIntro"/>
                </slide>
            </carousel>
        </div>
        <v-overlay :value="overlay" @click.native="overlay = false">
            <img :src="projectImg" class="project-image">
        </v-overlay>
    </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
export default {
    name: "Experience",
    components: {ProjectCard},
    data: ()=>({
        image : '',
        projects: [
            {
                title: 'Elegant CRM',
                subtitle : 'Construction company',
                img: require('../assets/projects/elegant-intro.png'),
                description : ['We designed database and API for frontend', 'Using Creative Tim template, we created a frontend'],
                link: 'https://crm.elegantenterprisesinc.com/#/login',
                open:  null,
            },
            {
                title: 'Art resume',
                subtitle : 'Site portfolio for ART',
                img: require('../assets/projects/art-intro.png'),
                description : ['We developed frontend', 'It is english & spanish website'],
                link: 'https://www.noedix.com/',
                open:  require('../assets/projects/art-resume.png'),
            },
            {
                title: 'Web developer resume',
                subtitle : 'Site portfolio for web developer',
                img: require('../assets/projects/programmer-intro.png'),
                description : ['Fully custom progressive web application', 'Check it out for more information about us'],
                link: 'https://ey-dev.github.io/my-page/#/',
                open:  require('../assets/projects/Dev-resume.png'),
            },
        ],
        overlay :false,
        projectImg: null,
    }),
    methods:{
        openIntro(index){
            this.overlay = true;
            this.projectImg = this.projects[index].open;
        }
    }
}
</script>

<style scoped>
.project-image{
    width: 700px;
}
.show{
    opacity: 1!important;
    transform: unset;
}
.bottom-show{
    transform: translate(0, -100%);
}
.experience{
    width: 100%;
    height: 100%;
    display: block;
    padding: 50px 25px 25px 25px;
    background-image: url("../assets/background-img/code.svg");
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: 100% 75px;
}
.top{
    opacity: 0;
    width: 100%;
    height: calc(100% - 350px);;
    position: relative;
    transition: all 1.5s ease-in-out;
}
.bottom{
    width: 100%;
    max-height: 350px;
    position: absolute;
    top: 50%;
    left: 0;
    transition: all 1.5s ease-in-out;
    padding-bottom: 25px;
}
.main-block{
    height: 100%;
    width: 100%;
}
.code-img{
    display: none;
}
.title{
    margin: auto;
    position: absolute;
    top: 50%;
    left:50px;
    transform: translate(0, -50%);
    width: 100%;
}
.title h1{
    font-size: 64pt;
    color: var(--darkgreen-color);
    margin-bottom: 50px;
}
.title h2{
    font-size: 18pt;
    color: var(--bg-dark);
}
.bottom h1{
    margin-bottom: 25px;
    color: var(--bg-dark);
}

@media only screen and (max-width: 1570px){
    .title h1{
        font-size: 56pt;
        margin-bottom: 35px;
    }
    .title h2{
        font-size: 15pt;
    }
}
@media only screen and (max-width: 1360px){
    .title h1{
        font-size: 50pt;
        margin-bottom: 30px;
    }
    .title h2{
        font-size: 13pt;
    }
}
@media only screen and (max-width: 1160px){
    .title{
        width: 48%;
    }
    .title h1{
        font-size: 34pt;
        margin-bottom: 20px;
    }
    .title h2{
        font-size: 10pt;
    }
}
@media only screen and (max-width: 850px){
    .project-image{
        width: 400px;
    }
    .experience{
        padding: 50px 0 25px 0;
        background-image: unset;
    }
    .top{
        max-width: 360px;
        margin: auto;
        opacity: 0;
    }
    .code-img{
        display: block;
        width: 50%;
        height: 50%;
        margin: auto;
    }
    .title{
        width: 100%;
        position: unset;
        transform: unset;
        text-align: center;
    }
}
@media only screen and (max-width: 400px){
    .project-image{
        width: 300px;
    }
    .title{
        width: 100%;
        padding-right: 20px;
        padding-left: 20px;
        margin-bottom: -35px;
    }
    .title h1{
        font-size: 16pt;
        margin-bottom: 0;
    }
    .title h2{
        font-size: 8pt;
        line-height: 15px;
    }
}
</style>
<style>
.VueCarousel-pagination{
    max-height: 30px;
}
.VueCarousel-slide{
    width: 100%;
}
.VueCarousel-dot-container, .VueCarousel-dot{
    margin-top: unset!important;
}
@media only screen and (max-width: 800px){
    .v-responsive__content{
        width: 100%!important;
    }
}
</style>
