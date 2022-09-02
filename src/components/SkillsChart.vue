<template>
<div class="bodych">
  <div class="chart">
    <ul class="bars">
       <li v-for="item in skills" :key="item.skill"><div class="bar" :skill="item.skill" @mouseover="selectBar(item)" :id="currentSkill === item.skill ? 'activebar' : false" :data-percentage="item.percentage" :style="{height: item.percentage}"></div><span></span></li>
    </ul>
  </div>
</div>
</template>

<script>
import { colors } from '@/store'
import { ref } from '@vue/reactivity'
export default {
    props: ['skillslist', 'skillpercentages'],
    data() {
        return {
            colors,
            currentSkill: null,
            percentages: ref(this.skillpercentages),
            skills: ref(this.skillslist)
        }
    },
    methods: {
        selectBar(item) {
            this.currentSkill = item.skill
            this.$emit('selection', item)
        }
    },
    mounted() {
        setTimeout(() => {
           for(let i = 0; i < this.skills.length; i++ ){
            this.skills[i].percentage = this.percentages[i]
           } 
        }, 1)  
    }  
}
</script>

<style scoped>
@media (min-width: 0) {
    .bars li {
        width: 10vw;
        height: 18vh;
        bottom: 5vh;
        left: 4vw;
    }
    .bars .bar {
        margin-left: 0;
        width: 6.5vw;
    }
}
@media (min-width: 600px) {
    .bars li {
        width: 8vw;
        height: 28vh;
        bottom: 5vh;
        left: 0;
    }
    .bars .bar {
        margin-left: 20%;
        width: 3.5vw;
    }
}
.bodych {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.chart {
    display: block;
}

.bars {
    color: #fff;
    font-size: 1.3vh;
    font-weight: 600;
    margin: 0;
    padding: 0;
    display: inline-block;
    border-radius: 1%;
}

.bars li{
    display: table-cell;
    position: relative;
}

.bars span{
    width: 100%;
    position: relative;
    bottom: -32vh;
    text-align: center;
}

.bars .bar {
    display: block;
    background: v-bind('colors.colfocus');
    position: absolute;
    bottom: 0;
    text-align: center;
    box-shadow: 0 0 10px 0 rgba(255,255,255,0.3);
    transition: box-shadow, background 0.5s;
    transition: height 1.5s;
    transition-delay: 0.5s;
}

.bars .bar:hover{
    background: v-bind('colors.colhighlight');
    box-shadow: 0 0 10px 0 rgba(255,255,255,0.7);
    cursor: pointer;
}

#activebar{
    background: v-bind('colors.colhighlight');
    box-shadow: 0 0 10px 0 rgba(255,255,255,0.7);
}

.bars .bar:before{
    color: v-bind('colors.colaccent');
    font-size: 2;
    content: attr(skill);
    position: relative;
    bottom: calc(-100% - 1vh);
}
</style>