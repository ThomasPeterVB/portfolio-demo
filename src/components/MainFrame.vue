<template>
<TiltControl />
<div class="carouselview">
  <div class="carousel">
    <div @click="cycleLeft" class="cycle left">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" fill="currentColor"><path d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z"></path></svg>
    </div>
    <div @click="cycleRight" class="cycle right">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>
    </div>
    <Transition name="carouselimage">
      <div v-if="imageName === 'csharp-raw.png'" class="bgimg" :style="inlineImage" />
      <div v-else-if="imageName === 'react-raw.png'" class="bgimg" :style="inlineImage" />
      <div v-else-if="imageName === 'vue-raw.png'" class="bgimg" :style="inlineImage" />
    </Transition>
    <div id="content" class="content">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
import {colors, changeColor, skewAngle, currentImage, imageList, nextImage} from '@/store'
import TiltControl from '@/components/TiltControl.vue'
import { ref } from '@vue/reactivity'
export default {
  data() {
    return {
      imageName: ref(currentImage),
      imageList,
      colors,
      skewAngle,
      direction: {1: '-100vw', 2: '0', 3: '100vw'}
    }
  },
  methods: {
    swapSelection(id) {
      id === this.currentSelection ? this.currentSelection = 0 : id !== 7 ? this.currentSelection = id : false
    },
    cycleLeft() {
      this.imageName = nextImage(-1)
      this.direction = {one: '-100vw', two: '0', three: '100vw'}
    },
    cycleRight() {
      this.imageName = nextImage(1)
      this.direction = {one: '100vw', two: '0', three: '-100vw'}
    }
  },
  watch: {
    currentSelection(id) {
      if (id === 4){
        changeColor('colfocus', '#3e60e0')
      } else {
        changeColor('colfocus', '#e0603e')
      }
    }
  },
  computed: {
    inlineImage () {
      var path = require('@/assets/images/' + this.imageName)
      return {
        backgroundImage: `url(${path})`
      }
    }
  },
  components: {
    TiltControl,
  }
}
</script>

<style>
.carousel {
  box-sizing: border-box;
  z-index: 20;
  margin-top: 11vh;
  background-image: linear-gradient(45deg, v-bind('colors.colhighlight'), v-bind('colors.colfocus'));
  transform: skewY(v-bind('skewAngle'));
  transition: all 0.6s;
  border: 0.6vh v-bind('colors.colaccent');
  border-style: solid none;
  overflow: hidden;
  position: relative;
}
.overlay {
  position: absolute;
  z-index: 10;
  top: 84vh;
  left: 0;
  width: 100vw;
  height: 40vh;
  transform: skewY(v-bind('skewAngle'));
}
.carousel > .bgimg {
  position: absolute;
  left: 0;
  z-index: 21;
  height: 66vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  transform-origin: top;
  transition: transform .6s ease-in-out;
}
.content {
  position: relative;
  box-sizing: border-box;
  z-index: 30;
  height: 66vh;
  max-width: 50vw;
  margin: 0 auto;
  padding: 1vh 1vw;
  border: 0.6vh v-bind('colors.colaccent');
  border-style: none solid;
  background-color: rgba(14,14,14,0.6);
  white-space: pre-wrap;
  overflow-x: hidden;
}
.cycle{
  z-index: 200;
  position: absolute;
  top: 23vh;
  height: 10vw;
  width: 10vw;
}
.left {
  left: 1vw;
}
.right {
  right: 1vw;
}
.cycle > svg{
  height: 100%;
  width: 100%;
  fill: v-bind('colors.colaccent');
  transition: all 0.6s;
}
.cycle:hover > svg{
  fill: v-bind('colors.colhighlight');
  animation: expand-horizontally 0.3s;
  cursor: pointer;
}

.carouselimage-enter-from{
  transform: translateX(v-bind('direction.one'));
}
.carouselimage-enter-to, .v-leave-from{
  transform: translateX(v-bind('direction.two'));
}
.carouselimage-leave-to {
  transform: translateX(v-bind('direction.three'));
}
</style>