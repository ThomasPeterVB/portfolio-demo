<template>
  <TopNav>
    
  </TopNav>
  <CornerToast />
  <MainFrame >
    <router-view />
  </MainFrame>
  <FooterStrip />
</template>

<script>
import TopNav from './components/TopNav.vue'
import FooterStrip from './components/FooterStrip.vue'
import CornerToast from './components/CornerToast.vue'
import MainFrame from '@/components/MainFrame.vue'

export default {
  name: 'App',
  components: { TopNav, FooterStrip, CornerToast, MainFrame },
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
