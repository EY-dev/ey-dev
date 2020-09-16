<template>
    <div class="project-card">
        <v-card class="mx-auto" max-width="400" width="100%" height="100%">
            <v-img class="white--text align-end card-background" height="50%" :src="project.img">
                <v-card-title class="title">{{ project.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{ project.subtitle }}</v-card-subtitle>

            <v-card-text class="text--primary card-text">
                <div v-for="(text, i) in project.description" :key="i">{{ text }}</div>
            </v-card-text>

            <v-card-actions>
                <v-btn v-if="project.open!=null" :small="$vuetify.breakpoint.xsOnly" color="#37474f" rounded dark @click="openProject">
                    open
                </v-btn>
                <v-btn :small="$vuetify.breakpoint.xsOnly" color="#37474f" text :href="project.link" dark >
                    Link
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props:['project', 'index'],
    methods: {
        openProject(){
            this.$emit('open-project', this.index);
        }
    }
}
</script>

<style scoped>
.project-card{
    z-index: 1;
    height: 100%;
    transition: all 0.5s ease-in-out;
    transform: scale(0.9, 0.9);
}
.project-card:hover{
    filter: unset;
    transform: scale(0.98, 0.98)
}
.title{
    color: var(--green-color);
    text-shadow: 2px 2px black;
}
.card-background{
    width: 100%;
    background-color: #37474f;
    background-repeat: no-repeat;
    height: 100%;
}
@media only screen and (max-width: 370px){
    .pb-0{
        font-size: 7pt;
    }
    .card-text{
        font-size: 6pt;
        padding-bottom: 0;
    }
}
@media only screen and (max-width: 500px){
    .card-text{
        font-size: 8pt;
    }
}
@media only screen and (max-width: 849px){
    .project-card:hover{
        transform: scale(0.9, 0.9)
    }
}
</style>

