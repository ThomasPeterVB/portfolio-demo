<template>
  <div class="footer">
    <h1><ClickableText text="I'm looking forward to working with you!" :startSelection="25" /></h1>
  </div>
</template>

<script>
import {colors, skewAngle} from '@/store'
import ClickableText from '@/components/ClickableText.vue'
export default {
  data() {
    return {
      colors,
      skewAngle
    }
  },
  components: {ClickableText}
}
</script>

<style>
.footer {
  transform: skewY(v-bind('skewAngle'));
  width: 100vw;
  height: 10vh;
  transition: all 0.6s;
}
.footer h1 {
  float: right;
  font-size: 3.5vh;
  right: 1.5vw;
  color: v-bind('colors.colaccent');
  font-family:'Arial Narrow', Arial, sans-serif;
  font-weight: 900;
  padding-right: 5vw;
}
</style>