<template>
  <div class="topnav">
    <a href="#" @click="activateNav" id="navigation"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path></svg></a>
    <a href="#" @click="activateNav" id="navigation"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path><path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path><circle cx="15.156" cy="4.858" r="1.237"></circle></svg></a>
    <a href="#" @click="activateNav" id="navigation"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 24 24" width="24" fill="currentColor"><path d="M5.978 14.969a.38.38 0 0 1 .002-.033l-.002.033zm.001-.167a1.36 1.36 0 0 0 .001.003v-.003zm.04 1.9c2.678-2.462 3.007-2.656 3.793-2.734C13.364 13.615 16 11.01 16 8.004c0-3.26-3.085-6.003-7-6.003S2 4.745 2 8.004c0 1.893 1.175 3.767 3.054 4.957.783.495.958 1.117.941 1.778a2.548 2.548 0 0 1-.009.15c.022.33.032.92.033 1.814zm3.99-.743c-.185.018-1.625 1.276-4.32 3.774a1 1 0 0 1-1.68-.742c.02-2.362.011-3.709-.024-4.04-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005 0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955z"></path></svg></a>
    <a href="#" @click="activateNav" id="navigation"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="24" fill="currentColor"><path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path></svg></a>
  </div>
</template>

<script>
export default {
    methods: {
        activateNav(e) {
            
            var navs = document.getElementsByClassName("activated")
            while (navs.length > 0){
                navs[0].classList.remove("activated")
            }
            e.path[0].closest('.svg').classList.add("activated")
        }
    }
}
</script>

<style>
.topnav {
    width: 100%;
    height: 6vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
}
.topnav a {
    margin: 0 1.5vw;
    width: 2vw;
    min-width: 30px;
    height: 4vh;
    position: relative;
}
.svg {
    fill: var(--global-color-accent);
    aspect-ratio: 1 / 1;
    height: 100%;
    width: 100%;
    padding: 0.5vh 0;
    margin-bottom: -2px;
    transition: all 0.3s ease-in-out;
}
.svg:hover, svg:active, .activated {
    fill: var(--global-color-focus);
}
.activated {
    border-bottom: 2px solid var(--global-color-focus);
}
</style>