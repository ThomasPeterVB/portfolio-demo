<template>
<div class="carouselview">
  <div class="overlay" />
  <div class="carousel">
    <div class="bgimg" :style="inlineImage" />
    <div id="content" class="content">
      <slot></slot>
    </div>
  </div>
  <div class="namecontainer">
    <h1>
      <span 
        v-for="char in characters" 
        :key="char.id"
        :class="char.id === currentSelection ? 'active' : ''"  
        @click="swapSelection(char.id)"
      >
        {{char.letter}}
      </span>
    </h1>
  </div>
</div>
</template>

<script>
import {colors, changeColor} from '@/store'
export default {
  data() {
    return {
      characters: [
        {letter: 'T', id:1},
        {letter: 'H', id:2},
        {letter: 'O', id:3},
        {letter: 'M', id:4},
        {letter: 'A', id:5},
        {letter: 'S', id:6},
        {letter: ' ', id:7},
        {letter: 'P', id:8},
        {letter: 'E', id:9},
        {letter: 'T', id:10},
        {letter: 'E', id:11},
        {letter: 'R', id:12}
        ],
      currentSelection: 9,
      imageName: 'csharp-raw.png',
      colors,
    }
  },
  methods: {
    swapSelection(id) {
      id === this.currentSelection ? this.currentSelection = 0 : id !== 7 ? this.currentSelection = id : false;
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
    bgImage () {
      return require('@/assets/images/' + this.imageName)
    },
    inlineImage () {
      return {
        backgroundImage: `url(${this.bgImage})`
      }
    }
  }
}
</script>

<style scoped>
.carousel {
  box-sizing: border-box;
  z-index: 20;
  margin-top: 11vh;
  background-image: linear-gradient(45deg, v-bind('colors.colfocus'), v-bind('colors.colfocustwo'));
  transform: skewY(-10deg);
  border: 5px v-bind('colors.colaccent');
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
  transform: skewY(-10deg);
  background-image: linear-gradient(179deg, v-bind('colors.colbackground'), v-bind('colors.colaccent') 95%);
  transition: all 0.3s ease-in-out;
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
}
.content {
  position: relative;
  box-sizing: border-box;
  z-index: 30;
  height: 66vh;
  max-width: 50vw;
  margin: 0 auto;
  padding: 1vh 1vw;
  border: 5px v-bind('colors.colaccent');
  border-style: none solid;
  background-color: rgba(14,14,14,0.6);
  white-space: pre-wrap;
  overflow-y: auto;
  overflow-x: hidden;
}
.carouselview h1 {
  z-index: 35;
  font-family: 'Xirod', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  letter-spacing: 2px;
  font-size: 2.5vw;
  transform: skewY(-10deg);
  color: v-bind('colors.colaccent');
  position: relative;
  cursor: pointer;
}
.namecontainer {
  width: 35vw;
  position: absolute;
  top: 16.4vh;
  left: 0vw;
}
.active {
  color: v-bind('colors.colfocus');
}
.small {
  display: none;
}
@media only screen and (max-width: 1000px){
  h1 {
    display: none;
  }
  #content {
    width: 100vw;
  }
}
</style>