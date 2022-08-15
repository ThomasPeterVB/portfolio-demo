<template>
  <div class="tophalf">
      <div>
        <Transition>
          <h2 class="pre" v-if="!barSelection"><ClickableText text="Hover the skills" :startSelection="4" /></h2>
          <a href="https://github.com/ThomasPeterVB" target="_blank" class="gitContainer" v-else-if="barSelection"><svg id="github" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path></svg></a>
        </Transition>
      </div>
      <div class="skillscontainer">
        <SkillsChart :skillslist="skills" :skillpercentages="percentages" @selection="setSelection"/>
      </div>
  </div>
  <div class="bottomhalf">
    <Transition>
      <div class="information" v-if="barSelection === skills[0].skill">
        <h2>Six years of experience building projects such as APIs for Web Apps, stand-alone WPF/WinForms tools, Worker Services, and a .NET MMORPG I maintained and updated for four years<br><br>As well as lesser experience in Unity, MonoGame(XNA), and some MAUI(Xamarin) phone development </h2>
      </div>
      <div class="information" v-else-if="barSelection === skills[1].skill">
        <h2>Eight years of experience building Web apps (half of which in Vue.JS and React), APIs in Node, independent modules and libraries, games, Google Script, Mobile apps, and data analysis<br><br>And some lesser experience with AngularJS, Next.js, and Express.js</h2>
      </div>
      <div class="information" v-else-if="barSelection === skills[2].skill">
        <h2>Three years of experience building micro applications for automation, data analysis, and visualisation, in both Django and PyQt(5)<br><br>Including extensive familiarity with common libraries such as SciPy, Keras, PyTorch, and TensorFlow</h2>
      </div>
      <div class="information" v-else-if="barSelection === skills[3].skill">
        <h2>Seven years of experience building APIs, stand-alone tools and applications in Spring Boot, integration projects with many fluctuating dependencies in Maven, and web development in Spark<br><br>As well as DevOps consulting, microservices through Kubernetes, and large-scale migration projects<br><br></h2>
      </div>
      <div class="information" v-else-if="barSelection === skills[4].skill">
        <h2>Two years of personal projects including a homemade game engine as well as a framework I intend to use for developing iOS and Android apps for the novels I write<br><br>As well as a smaller project for pseudo-randomization using specific hardware</h2>
      </div>
    </Transition>
  </div>
</template>

<script>
import { colors } from '@/store'
import ClickableText from '@/components/ClickableText.vue'
import SkillsChart from '@/components/SkillsChart.vue'
export default {
  data() {
    return {
      barSelection: null,
      skills: [
        {skill: 'C#', percentage: '0%'},
        {skill: 'JS/TS', percentage: '0%'},
        {skill: 'Python', percentage: '0%'},
        {skill: 'Java', percentage: '0%'},
        {skill: 'C++', percentage: '0%'}
      ],
      percentages: ['95%', '100%', '75%', '80%', '60%'],
      colors
    }
  },
  components: { SkillsChart, ClickableText },
  methods: {
    setSelection(item){
      this.barSelection = item.skill
    }
  }
}
</script>

<style>
.tophalf {
  height: 40vh;
  overflow: hidden;
}

.pre, .gitContainer {
  width: 15vw;
  height: 30vh;
  position: absolute;
}

.pre {
  top: 2.5vh;
  padding: 5vh 0 0 1.5vw;
}

.gitContainer {
  top: 5vh;
  left: 2.8vw;
}

.gitContainer > svg {
  fill: v-bind('colors.colfocus');
  width: 15vw;
  height: 15vw;
}

#github {
  transition: fill 0.3s ease-in-out;
}

.gitContainer:hover > #github {
  fill: v-bind('colors.colhighlight');
  cursor: pointer;
}

.tophalf h2 {
  padding-top: 9vh;
  font-size: 6vh;
  transition: all 0.6s;
}

.skillscontainer {
  position: absolute;
  padding: 7vh 2vw 0;
  width: 27.5vw;
  float: right;
  top: 0;
  right: 1vw;
}

.bottomhalf {
  height: 24vh;
  width: 100%;
  overflow: hidden;
}

.information {
  position: absolute;
  top: 40vh;
  left: 0;
  padding: 0 1vw;
}

.v-enter-active {
  animation: bounce-in 0.8s;
  transition: opacity 0.8s ease-in-out;
}
.v-leave-active {
  animation: bounce-in 0.8s reverse;
  transition: opacity 0.8s ease-in-out;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>