<template>
  <div class="contact">
    <div class="header">
      <h1><ClickableText :text="headerText" :startSelection="submitStatus ? 5 : 9" /></h1>
    </div>
    <form @submit.prevent="submitForm" class="contactForm" @reset="resetForm">
      <div class="block">
        <input class="input" v-model="name" id="name" placeholder="What's your name?" :class="name === '' ? 'empty' : ''" :disabled="submitStatus ? true : false">
      </div>
      <div class="block">
        <input class="input" v-model="email" type="email" id="email" placeholder="And what's your Email address?" :class="email === '' ? 'empty' : ''" :disabled="submitStatus ? true : false">
      </div>
      <div>
        <textarea class="input" v-model="message" id="message" placeholder="Please enter your message" :class="message === '' ? 'empty' : ''" :disabled="submitStatus ? true : false"/>
      </div>
      <button v-if="!submitStatus" id="submit" type="submit">Submit</button>
      <button v-else>Message Sent!</button>
    </form>
  </div>
</template>

<script>
import { colors, submitStatus, changeSubmitStatus } from '@/store'
import ClickableText from '@/components/ClickableText.vue'
import { db } from '@/Firebase'
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      submitStatus,
      colors,
    }
  },
  components: {ClickableText},
  methods: {
    submitForm() {
      if (!this.submitStatus){
        document.getElementById("submit").textContent = "Submitting..."
        const date = new Date();
        db.collection("portfolio").add({
          name: this.name,
          email: this.email,
          message: this.message,
          timePosted: 'Message was posted on ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        }).then(() => {
          this.name = ""
          this.email = ""
          this.message = ""
          this.submitStatus = false
          changeSubmitStatus()
        }).catch((err) => {console.log(err)})
      }
    }
  },
  computed: {
    headerText() {
      return this.submitStatus ? 'Message sent' : 'Send me a message';
    }
  }
}

</script>

<style>
.contact {
  width: 100%;
  height: 97%;
  margin: 1vh 0;
  overflow: hidden;
}
.header {
  height: 10vh;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 7vh;
}
.contactForm {
  height: 50vh;
  width: 100%;
}
.contactForm input {
  width: 30vw;
  height: 3vh;
  margin-bottom: 3vh;
  caret-color: transparent;
  border: none;
}
.contactForm textarea {
  width: 30vw;
  height: 9vh;
  border: none;
}
.empty {
  text-align: center;
}
.contactForm button {
  background: v-bind('colors.colhighlight');
  margin-top: 7vh;
  width: 15vw;
  height: 5vh;
  font-size: 2vh;
}
.contactForm button:hover{
  cursor: pointer;
}
</style>