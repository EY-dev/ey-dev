<template>
    <div id="Contact" class="contact">
        <contact-header/>
        <message-box/>
    </div>
</template>

<script>
import ContactHeader from "@/components/ContactHeader";
import MessageBox from "@/components/MessageBox";
export default {
    name: "Contact",
    components: {MessageBox, ContactHeader}
}
</script>

<style scoped>
    .contact{
        background-color: var(--blue-color);
        width: 100%;
        height: 100%;
        min-width: 100%;
        display: flex;
    }
    @media only screen and (max-width: 800px){
        .contact{
            display: block;
        }
    }
</style>
