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
    border-radius: 5px;
}

.bars li{
    display: table-cell;
    width: 8vw;
    height: 30vh;
    position: relative;
    bottom: 5vh;
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
    width: 3.5vw;
    position: absolute;
    bottom: 0;
    margin-left: 2.2vw;
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