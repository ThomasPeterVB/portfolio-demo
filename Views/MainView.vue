<template>
  <div class="container">
    <h1>test</h1>
  </div>
</template>

<script>
import { currentImage } from '@/store'
export default {
  data() {
    return {
      currentImage
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 100%;
}
</style>