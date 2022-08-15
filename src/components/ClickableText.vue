<template>

  <h1 class="textcontent">
    <span 
    v-for="char in result" 
    :key="char.id"
    :class="char.id === currentSelection ? 'activechar' : ''"
    class="singlechar"
    @click="changeSelection(char)"
    >
      {{char.letter}}
    </span>
  </h1>

</template>

<script>
import { colors, rotateColor } from '@/store'
import { ref } from '@vue/reactivity'
export default {
  props: ['text', 'startSelection', 'colorMode'],
  setup(props) {

    const input = props.text.split('')
    const result = []
    let i = 1
    input.forEach(char => {
      result.push({letter: char, id: i})
      i++
    })
    var currentSelection = ref()
    currentSelection.value = ref(props.startSelection).value

    var switchColorOnClick = ref(false)
    switchColorOnClick = ref(props.colorMode).value !== undefined ? ref(props.colorMode) : false

    function changeSelection(char) {
      currentSelection === char.id ? currentSelection.value = 0 : char.letter !==' ' ? currentSelection.value = char.id : false
      if (switchColorOnClick){
        rotateColor(1)
      }
    }

    return {result, currentSelection, changeSelection, colors}
  }
}
</script>

<style scoped>
  .activechar {
  transition: all 0.3s ease-in-out;
  color: v-bind('colors.colhighlight');
  }
  .singlechar {
    z-index: 100;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
  }
  .singlechar:hover {
      color: v-bind('colors.colhighlight');
  }
</style>



