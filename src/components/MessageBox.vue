<template>
    <div class="message-box">
        <div class="message-container">
            <h2>Let's talk about your project</h2>
            <form class="message-form" @submit.prevent="sendData">
                <div class="field">
                    <label for="name">Name*</label>
                    <input type="text" id="name" name="user_fName" class="input-field" :value="form.fName" placeholder="required">
                    <div class="text-error"> {{ errors[0].nameError }} </div>
                </div>
                <div class="field">
                    <label for="email">Email*</label>
                    <input type="text" id="email" name="user_email" class="input-field" :value="form.email" placeholder="required">
                    <div class="text-error"> {{ errors[1].emailError }} </div>
                </div>
                <div class="field">
                    <label for="message">Message*</label>
                    <textarea type="text" id="message" name="user_message" class="input-field" :value="form.message" placeholder="required"/>
                    <div class="text-error"> {{ errors[2].messageError }} </div>
                </div>
                <input class="send-button" type="submit" value="Send"/>
            </form>
        </div>
        <div class="animation-layout">
            <div class="animation-box">
                <div class="envelope">
                    <div class="first-line-envelope"/>
                    <div class="second-line-envelope"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
    name: "MessageBox",
    data: () => ({
        form: {
            fName: '',
            lName: '',
            email: '',
            message: ''
        },
        errors:[
            {nameError: ''}, {emailError: ''}, {messageError: ''}
        ],
        fields: null
    }),
    methods:{
        delay(t, v) {
            return new Promise(function(resolve) {
                setTimeout(resolve.bind(null, v), t)
            });
        },
        sendSuccess(){
            document.querySelector('.animation-box').classList.add('box-success');
            document.querySelector('.envelope').classList.add('envelope-radius');
            document.querySelector('.first-line-envelope').classList.add('first-line-success');
            document.querySelector('.second-line-envelope').classList.add('second-line-success');
            this.delay(3000).then(()=>{
                document.querySelector('.animation-layout').classList.remove('layout-in');
                this.delay(1000).then(()=>{
                    document.querySelector('.animation-box').classList.remove('box-error');
                    document.querySelector('.envelope').classList.remove('envelope-radius');
                    document.querySelector('.first-line-envelope').classList.remove('first-line-error');
                    document.querySelector('.second-line-envelope').classList.remove('second-line-error');
                })
            });
        },
        sendError(){
            document.querySelector('.animation-box').classList.add('box-error');
            document.querySelector('.envelope').classList.add('envelope-radius');
            document.querySelector('.first-line-envelope').classList.add('first-line-error');
            document.querySelector('.second-line-envelope').classList.add('second-line-error');
            this.delay(3000).then(()=>{
                document.querySelector('.animation-layout').classList.remove('layout-in');
                this.delay(1000).then(()=>{
                    document.querySelector('.animation-box').classList.remove('box-error');
                    document.querySelector('.envelope').classList.remove('envelope-radius');
                    document.querySelector('.first-line-envelope').classList.remove('first-line-error');
                    document.querySelector('.second-line-envelope').classList.remove('second-line-error');
                })
            });
        },
        sendData(e){
            if (this.validate()){
                const layout = document.querySelector('.animation-layout');
                layout.classList.add('layout-in');
                const envelope = document.querySelector('.envelope');
                envelope.classList.add('rotate');
                this.delay(2000).then(()=>{
                    emailjs.sendForm('gmail', 'webresumeform', e.target, 'user_ZLOIg359OFBPpKHA5oBQw')
                        .then((result) => {
                            console.log('SUCCESS!', result.status, result.text);
                            this.clearForm();
                            envelope.classList.remove('rotate');
                            this.delay(1000).then(()=>{
                                this.sendSuccess();
                            });
                        })
                        .catch((error) => {
                            console.log('FAILED...', error);
                            envelope.classList.remove('rotate');
                            this.delay(1000).then(()=>{
                                this.sendError();
                            });
                        });
                })

            }
        },
        clearForm(){
            this.fields.forEach((field)=>{
                field.classList.remove('error-field')
            })
            this.errors = [{nameError: ''}, {emailError: ''}, {messageError: ''}];
            this.form = {fName: '', lName: '', email: '', message: ''}
        },
        validate(){
            this.errors = [{nameError: ''}, {emailError: ''}, {messageError: ''}];
            let anyErrors = false;
            this.form.fName = document.getElementById("name").value;
            this.form.email = document.getElementById("email").value;
            this.form.message = document.getElementById("message").value;
            if (this.form.fName === ''){
                this.fields[0].classList.add('error-field');
                this.errors[0].nameError = 'Name must be filled in';
                anyErrors = true;
            }
            if (this.form.email === ''){
                this.errors[1].emailError = 'Name must be filled in';
                this.fields[1].classList.add('error-field');
                anyErrors = true;
            }
            if (this.form.message === ''){
                this.errors[2].messageError = 'Name must be filled in';
                this.fields[2].classList.add('error-field');
                anyErrors = true;
            }
            if (!/.+@.+\..+/.test(this.form.email)) {
                this.errors[1].emailError = 'Enter valid email';
                this.fields[1].classList.add('error-field');
                anyErrors = true;
            }
            return !anyErrors;
        },
    },
    mounted() {
        this.fields = document.querySelectorAll('.input-field');
        this.fields.forEach((field)=>{
            field.addEventListener('change', ()=>{
                field.classList.remove('error-field');
                if (field.id === 'name'){
                    this.errors[0].nameError = '';
                    this.form.fName = field.value;
                }
                if (field.id === 'email'){
                    this.errors[1].emailError = '';
                    this.form.email = field.value;
                }
                if (field.id === 'message'){
                    this.errors[2].messageError = '';
                    this.form.message = field.value;
                }
            })
        })
    }
}
</script>

<style>
.message-box{
    height: 100%;
    width: 100%;
    padding-top: 102px;
    padding-left: 25px;
    padding-right: 25px;
    flex: 1;
    position: relative;
}
.message-container{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding-left: 25px;
    padding-right: 25px;
}
.message-box h2{
    font-family: 'Libre Baskerville', serif;
    font-size: 25pt;
    text-align: center;
    color: var(--white-color);
}
.message-form{
    width: 100%;
    height: 90%;
    max-width: 460px;
    padding-top: 50px;
    margin: auto;
}
.field{
    position: relative;
    margin-bottom: 25px;
}
.field label{
    font-family: 'Libre Baskerville', serif;
    font-size: 15pt;
    color: var(--white-color);
}
.input-field{
    padding: 5px 5px 5px 10px;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 15pt;
    height: 35px;
    color: var(--white-color);
    background-color: rgba(255, 255, 255, 0.3);
}
.input-field:hover{
    background-color: rgba(255, 255, 255, 0.5);
}
.input-field:active, .input-field:focus{
    outline: unset;
}
.error-field{
    border-style: solid;
    border-width: 2px;
    color: var(--red-color);
    background-color: rgba(170,88,78, 0.5)
}
.text-error{
    color: #ff8181;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 8pt;
    width: 100%;
    height: 15px;
}
.input-field:focus{
    background-color: rgba(255, 255, 255, 0.4);
    color: var(--white-color);
    border-style: solid;
    border-width: 2px;
}
.field textarea{
    height: 125px;
}
.send-button{
    width: 100%;
    text-align: center;
    background-color: var(--white-color);
    color: var(--blue-color);
    height: 40px;
    border-radius: 20px;
    font-size: 20pt;
    font-family: 'Roboto',  sans-serif;
}
.send-button:hover{
    background-color: var(--red-color);
    color: var(--white-color);
}
.send-button:focus{
    border: unset;
    outline: unset;
}
.send-button:active{
    transform: scale(0.95,0.9);
}
@media only screen and (max-width: 960px){
    .message-box{
        padding-top: 96px;
    }
    .message-box h2{
        font-size: 20pt;
    }
}
@media only screen and (max-width: 800px){
    .message-box{
        height: 66%;
        margin-top: unset;
    }
    .message-box{
        padding: 25px;
    }
    .message-box h2{
        font-family: 'Libre Baskerville', serif;
        font-size: 30pt;
    }
}
@media only screen and (max-width: 580px){
    .send-button:hover{
        background-color: var(--white-color);
        color: var(--blue-color);
    }
    .send-button:active{
        background-color: var(--red-color);
        color: var(--white-color);
    }
    .message-box h2{
        font-size: 16pt;
    }
    .message-form{
        padding-top: 10px;
    }
    .field{
        margin-bottom: 10px;
    }
    .field label{
        font-size: 10pt;
    }
    .input-field{
        font-size: 10pt;
        height: 25px;
    }
    .field textarea{
        height: 75px;
    }
    .send-button{
        height: 30px;
        border-radius: 10px;
        font-size: 15pt;
    }
    .text-error{
        color: #ff8181;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 8pt;
        width: 100%;
        height: 10px;
    }
}
</style>
<style scoped>
.animation-layout{
    position: fixed;
    background-color: var(--white-color);
    top:150%;
    left:50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    transition: all 0.5s ease-in-out;
}
.animation-box{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 130px;
    border-radius: 65px;
    background-color: #1076ad;
    transition: all 1s ease-in-out;
}
.envelope{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    border-color: white;
    border-width: 4px;
    border-style: solid;
    border-radius: 10px;
    width: 90px;
    height: 60px;
    transition: all 1s ease-in-out;
}
.first-line-envelope{
    position: fixed;
    transform: translate(-8px, 16px) rotate(40deg);
    width: 56px;
    height: 4px;
    background-color: white;
    transition: all 1s ease-in-out;
}
.second-line-envelope{
    position: fixed;
    transform: translate(33px, 16px) rotate(-40deg);
    width: 56px;
    height: 4px;
    background-color: white;
    transition: all 1s ease-in-out;
}
.layout-in{
    top:50%;
}
.box-success{
    background-color: #4CC355;
}
.box-error{
    background-color: #F24153;
}
.rotate {
    animation: rotation 4s infinite linear;
}
.envelope-radius{
    width: 90px;
    height: 90px;
    border-width: 6px;
    border-radius: 47px;
}
.first-line-error{
    height: 6px;
    transform: translate(10px, 35px) rotate(45deg);
}
.second-line-error{
    height: 6px;
    transform: translate(10px, 35px) rotate(-45deg);
}
.first-line-success{
    width: 20px;
    height: 6px;
    transform: translate(17px, 45px) rotate(45deg);
}
.second-line-success{
    width: 45px;
    height: 6px;
    transform: translate(25px, 35px) rotate(-45deg);
}
@keyframes rotation {
    from {
        transform: translate(-50%, -50%) rotateY(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotateY(359deg);
    }
}
</style>
