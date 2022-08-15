<template>
  <div class="tiltcontrol">
    <svg @click="handleClick" class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="24" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg>
  </div>
</template>

<script>
import {colors, skewAngle, changeSkew} from '@/store'
export default {
    data() {
        return {
            colors,
            skewAngle,
            arrowRotation: '0deg'
        }
    },
    methods: {
        handleClick() {
            if (this.skewAngle === '-10deg'){
                this.arrowRotation = '180deg'
                changeSkew('0')
            } else {
                this.arrowRotation = '0deg'
                changeSkew('-10deg')
            }
        }
    }
}
</script>

<style>
.tiltcontrol {
    position: absolute;
    z-index: 150;
    top: 0vw;
    left: 0vw;
}
.arrow, .arrow > path {
    height: 4vw;
    width: 4vw;
}
.arrow {
    transform: rotate(v-bind('arrowRotation'));
    transition: all 0.6s;
    fill: v-bind('colors.colhighlight');
}
</style>