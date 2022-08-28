<template>
  <div class="pfcontainer">
    <div class="pfitem" v-if="currentImage === 'csharp-raw.png'">
      C-Sharp
    </div>
    <div class="pfitem" v-else-if="currentImage === 'vue-raw.png'">
      <h2 ><ClickableText text="Hi there!" :startSelection="8" /></h2>
      <div class="guide1"></div>
    </div>
    <div class="pfitem" v-else-if="currentImage === 'react-raw.png'">
      React
    </div>
  </div>
</template>

<script>
import { currentImage } from '@/store'
import ClickableText from '@/components/ClickableText.vue'
export default {
  data() {
    return {
      currentImage
    }
  },
  components: {
    ClickableText
  }
}
</script>

<style>
.pfcontainer {
  overflow: hidden;
}
.pfitem {
  position: absolute;
  margin-top: 4vh;
  width: 47vw;
  height: 56vh;
  outline: 1px solid blue;
}
.pfitem h2 {
  font-size: 3rem;
  animation: fallInFromSide 1s;
}

.pfitem p {
  font-size: 1.5rem;
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
</style>