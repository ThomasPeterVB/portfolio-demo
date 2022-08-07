<template>
  <TopNav />
  <CornerToast />
  <CarouselDisplay />
  <FooterStrip />
</template>

<script>
import TopNav from './components/TopNav.vue'
import FooterStrip from './components/FooterStrip.vue'
import CornerToast from './components/CornerToast.vue'
import CarouselDisplay from './components/CarouselDisplay.vue'

export default {
  name: 'App',
  components: { TopNav, FooterStrip, CornerToast, CarouselDisplay }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--global-color-accent);
}
</style>
