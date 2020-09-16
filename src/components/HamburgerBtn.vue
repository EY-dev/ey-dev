<template>
    <div class="hamburger-button">
        <div class="line-block">
            <div class="line"/>
            <div class="line"/>
            <div class="line"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "HamburgerBtn",
    mounted() {
        const menuBtn = document.querySelector('.hamburger-button');
        const that = this;
        menuBtn.addEventListener('click', ()=>{
            menuBtn.classList.toggle('active');
            that.$emit('open-nav');
        })
    }
}
</script>

<style scoped>
.hamburger-button{
    display: none;
    max-width: 40px;
    height: 40px;
    background-color: rgba(48,43,46,0.3);
    border-radius: 20px;
}
.hamburger-button:hover{
    cursor: pointer;
    background-color: var(--red-color);
}
.hamburger-button:hover .line-block .line{

}
.line-block{
    position: relative;
    width: 25px;
    height: 15px;
    display: block;
    margin: auto;
    opacity: 1;
}
.line{
    width: 100%;
    height: 3px;
    margin-bottom: 3px;
    background-color: var(--white-color);
    transition: all .5s ease-in-out;
}
@media only screen and (max-width: 850px){
    .hamburger-button{
        display: flex;
        margin: auto;
    }
    .active .line-block .line:nth-child(1){
        transition-delay: .3s;
        -moz-transform: translate(0px, 6px) rotate(45deg);
        -webkit-transform: translate(0px, 6px) rotate(45deg);
        -o-transform: translate(0px, 6px) rotate(45deg);
        -ms-transform: translate(0px, 6px) rotate(45deg);
        transform: translate(0px, 6px) rotate(45deg);
    }
    .active .line-block .line:nth-child(3){
        transition-delay: .3s;
        -moz-transform: translate(0px, -6px) rotate(-45deg);
        -webkit-transform: translate(0px, -6px) rotate(-45deg);
        -o-transform: translate(0px, -6px) rotate(-45deg);
        -ms-transform: translate(0px, -6px) rotate(-45deg);
        transform: translate(0px, -6px) rotate(-45deg);
    }
    .active .line-block .line:nth-child(2){
        opacity: 0;
    }
}
</style>
