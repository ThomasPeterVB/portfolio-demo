<template>
  <div class="pfcontainer">
    <div class="pfitem" v-if="currentImage === 'csharp-raw.png'">
      Coming soon
    </div>
    <div class="pfitem" v-else-if="currentImage === 'vue-raw.png'">
      <h2 ><ClickableText text="Hi there!" :startSelection="6" /></h2>
      <div class="delayme">
        <p><br>Use the arrows to switch between projects<br><br>Or head on over to:</p>
        <router-link :to="{name: 'skills'}" ><button><span class="buttontext">Skills</span></button></router-link>
        <router-link :to="{name: 'contact'}" ><button><span class="buttontext">Contact</span></button></router-link>
        <router-link :to="{name: 'about'}" ><button><span class="buttontext">About</span></button></router-link>
        <p><span class="smaller">Don't like the tilt? Click the arrow in the top-left corner</span></p>
      </div>
      <div class="footnote delayme"></div>
    </div>
    <div class="pfitem" v-else-if="currentImage === 'react-raw.png'">
      Coming soon
    </div>
  </div>
</template>

<script>
import { currentImage, colors } from '@/store'
import ClickableText from '@/components/ClickableText.vue'
export default {
  data() {
    return {
      currentImage,
      colors
    }
  },
  components: {
    ClickableText
  }
}
</script>

<style>
@media (min-width: 0){
  .pfitem{
    width: 75%;
    margin: 5% 12.5% 0;
  }
  .pfitem h2 {
    font-size: 2.5rem;
  }
  .pfitem p {
    font-size: 1.5rem;
  }
  .pfitem button {
    margin: 5% 6% 3%;
    height: 3rem;
    width: 6rem;
  }
  .pfitem .buttontext {
    font-size: 1.5rem;
  }
}
@media (min-width: 600px) {
  .pfitem{
    width: 99%;
    height: 100%;
    margin: 2.5% 0.5%;
  }
  .pfitem h2 {
    font-size: 3rem;
  }
  .pfitem p {
    font-size: 2.5rem;
  }
  .pfitem button {
    margin: 10% 6%;
    height: 4rem;
    width: 8rem;
  }
  .pfitem .buttontext {
    font-size: 2.2rem;
  }
}

.pfitem {
  position: relative;
}

.pfcontainer {
  overflow: hidden;
}

.pfitem h2 {
  animation: fallInFromSide 1s;
}

.pfitem .delayme {
  animation: appear 3s;
}

.pfitem button {
  display: inline-flex;
  box-sizing: content-box;
  background-color: transparent;
  border: 0.25vw solid v-bind('colors.colfocus');
  border-radius: 5%;
  transition: border ease 0.3s;;
}
.pfitem .buttontext {
  margin: auto;
  text-align: center;
  color: v-bind('colors.colaccent');
  transition: color ease 0.6s;
}
.pfitem button:hover {
  cursor: pointer;
  border-color: v-bind('colors.colhighlight');
}
.pfitem button:hover .buttontext {
  color: white;
}
a {
  text-decoration: none;
}
.smaller {
  font-size: 65%;
}

@keyframes fallInFromSide {
  0% {
    transform: translateX(-10vw);
    opacity: 0;
  }
  10% {
    transform: scale(1.4, 0.7) translateX(-10vw);
  }
  90% {
    transform: scale(1) translateX(-10vw);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}

@keyframes appear {
  0% {opacity: 0;}
  50% {opacity: 0;}
  100% {opacity: 1;}
}
</style>