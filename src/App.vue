<template>
  <v-app>
      <nav-bar/>
      <section name="home" class="home-back">
          <home/>
      </section>
      <section name="Experience">
          <experience/>
      </section>
      <section name="Advantages" style="z-index: 1">
          <projects/>
      </section>
      <section name="Contact">
        <contact/>
      </section>
  </v-app>
</template>

<script>

import NavBar from "@/components/NavBar";
import Home from "@/views/Home";
import Contact from "@/views/Contact";
import Experience from "@/views/Experience";
import Projects from "@/views/Projects";
export default {
    name: 'app',
    components: {
        Projects,
        Experience,
        Contact,
        Home,
        NavBar,
    },
    mounted() {

    },
    methods:{
        async accept() {
            this.showUpdateUI = false;
            await this.$workbox.messageSW({ type: "SKIP_WAITING" });
        }
    },
    created() {
        if (this.$workbox) {
            this.$workbox.addEventListener("waiting", () => {
                this.showUpdateUI = true;
            });
        }
    }
}
</script>

<style>
body, html{
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    min-width: 320px;
}
input,textarea{
    border-color: unset!important;
}
:root {
    --bg-dark: #37474f;
    --white-color: #fff;
    --blue-color: #607C8A;
    --darkgreen-color: #136f5f;
    --green-color:#27debf;
    --light-blue: #D2DADD;
    --red-color: #AA584E;
}
section{

    height: 100vh;
    width: 100%;
}
.home-back{
    background-image: url("assets/background-img/city.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
</style>
