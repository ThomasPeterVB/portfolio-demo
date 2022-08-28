<template>
  <nav>
    <div class="left name">
        <h1 class="textcontent"><ClickableText text="THOMAS PETER" :startSelection="9" :colorMode="true" /></h1>
    </div>
    <div class="navbar">
        <router-link :to="{name: 'main'}" ><div class="svgbox"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path></svg></div></router-link>
        <router-link :to="{name: 'skills'}" ><div class="svgbox"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M20 8.163A2.106 2.106 0 0 0 18.926 10c0 .789.433 1.476 1.074 1.837l-.717 2.406a2.105 2.105 0 0 0-2.218 3.058l-2.062 1.602A2.104 2.104 0 0 0 11.633 20l-3.29-.008a2.104 2.104 0 0 0-3.362-1.094l-2.06-1.615A2.105 2.105 0 0 0 .715 14.24L0 11.825A2.106 2.106 0 0 0 1.051 10C1.051 9.22.63 8.54 0 8.175L.715 5.76a2.105 2.105 0 0 0 2.207-3.043L4.98 1.102A2.104 2.104 0 0 0 8.342.008L11.634 0a2.104 2.104 0 0 0 3.37 1.097l2.06 1.603a2.105 2.105 0 0 0 2.218 3.058L20 8.162zM14.823 3.68c0-.063.002-.125.005-.188l-.08-.062a4.103 4.103 0 0 1-4.308-1.428l-.904.002a4.1 4.1 0 0 1-4.29 1.43l-.095.076A4.108 4.108 0 0 1 2.279 7.6a4.1 4.1 0 0 1 .772 2.399c0 .882-.28 1.715-.772 2.4a4.108 4.108 0 0 1 2.872 4.09l.096.075a4.104 4.104 0 0 1 4.289 1.43l.904.002a4.1 4.1 0 0 1 4.307-1.428l.08-.062A4.108 4.108 0 0 1 17.7 12.4a4.102 4.102 0 0 1-.773-2.4c0-.882.281-1.716.773-2.4a4.108 4.108 0 0 1-2.876-3.919zM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg></div></router-link>
        <router-link :to="{name: 'contact'}" ><div class="svgbox"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 24 24" width="24" fill="currentColor"><path d="M5.978 14.969a.38.38 0 0 1 .002-.033l-.002.033zm.001-.167a1.36 1.36 0 0 0 .001.003v-.003zm.04 1.9c2.678-2.462 3.007-2.656 3.793-2.734C13.364 13.615 16 11.01 16 8.004c0-3.26-3.085-6.003-7-6.003S2 4.745 2 8.004c0 1.893 1.175 3.767 3.054 4.957.783.495.958 1.117.941 1.778a2.548 2.548 0 0 1-.009.15c.022.33.032.92.033 1.814zm3.99-.743c-.185.018-1.625 1.276-4.32 3.774a1 1 0 0 1-1.68-.742c.02-2.362.011-3.709-.024-4.04-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005 0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955z"></path></svg></div></router-link>
        <router-link :to="{name: 'about'}" ><div class="svgbox"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="24" fill="currentColor"><path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path></svg></div></router-link>
    </div>
    <div class="right"></div>
  </nav>
</template>

<script>
import ClickableText from '@/components/ClickableText.vue'
import {colors, skewAngle} from '@/store'
export default {

    data () {
        return {colors, skewAngle}
    },
    components: {
        ClickableText,
    }
}
</script>

<style>

nav {
    width: 100%;
    height: 7vh;
    position: relative;
    top: 9vh;
    transform: skewY(v-bind('skewAngle'));
    transition: all 0.6s;
    display: flex;
    flex-direction: row;
}
.left, .right {
    flex: 1;
}
.navbar {
    position: relative;
    height: 7vh;
    width: 30vw;
    margin: 0 auto;
}
.navbar > a {
    height: 7vh;
    width: 3vw;
    display: inline-flex;
    margin: 0 0.6vw;
    box-sizing: border-box;
    transition: border 0.5s;
}
.svgbox, .svg {
    width: 3vw;
}
.svg {
    fill: v-bind('colors.colaccent');
    transition: fill 0.3s ease-in-out;
}

a:hover > .svgbox > svg {
    animation: expand-horizontally 0.3s;
}

a.router-link-exact-active > .svgbox > svg {
    fill: v-bind('colors.colhighlight');
}

a:hover > .svgbox> svg:not(.router-link-exact-active) {
    fill: v-bind('colors.colhighlight');
}

.navbar > a.router-link-exact-active {
    border-bottom: 0.6vh solid v-bind('colors.colhighlight');
}
.name > .textcontent{
    position: relative;
    font-size: 3vw;
}


</style>