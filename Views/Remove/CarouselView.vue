<template>
<div class="carouselview">
  <div class="overlay" />
  <div class="carousel">
    <div class="bgimg" />
    <div class="content">
    </div>
  </div>
  <h1 class="shadow">
    <span v-for="char in characters" 
      :key="char.id" :class="char.id === currentSelection ? 'active' : ''"  
      @click="swapSelection(char.id)">
    
      {{char.letter}}
    
    </span>
  </h1>
</div>
</template>

<script>
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
      currentSelection: 0,
      windowWidth: window.innerWidth
    }
  },
  methods: {
    swapSelection(id) {
      this.currentSelection = id;
    }
  }
}
</script>

<style>
.carousel {
  box-sizing: border-box;
  z-index: 20;
  margin-top: 11vh;
  background-image: linear-gradient(45deg, var(--global-color-focus), var(--global-color-focus2));
  transform: skewY(-10deg);
  border: 5px var(--global-color-accent);
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
  background-image: linear-gradient(179deg, var(--global-color-background), var(--global-color-accent) 95%);
}
.carousel > .bgimg {
  position: absolute;
  left: 0;
  z-index: 21;
  height: 66vh;
  width: 100vw;
  background-image: url('@/assets/csharp-raw.png');
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: blur(2px); */
  opacity: 0.5;
}
.content {
  position: relative;
  box-sizing: border-box;
  z-index: 30;
  height: 66vh;
  max-width: 50vw;
  margin: 0 auto;
  border: 5px var(--global-color-accent);
  border-style: none solid;
  background-color: rgba(14,14,14,0.6);
  white-space: pre-wrap;
}
.carouselview h1 {
  display: inherit;
  z-index: 35;
  font-family: 'Xirod', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  letter-spacing: 2px;
  font-size: 4.7vh;
  transform: skewY(-10deg);
  color: var(--global-color-accent);
  position: relative;
  bottom: 67vh;
  right: 30vw;
  cursor: pointer;
}
.active {
  color: var(--global-color-focus);
}
.small {
  display: none;
}
</style>