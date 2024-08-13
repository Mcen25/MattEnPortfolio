<template>
  <div>
    <h1 id="center-text">Hello, my name is Matthew En!</h1>

    <p id="firstParagraph">
      I am a dedicated Computer Science student at the University of Massachusetts Amherst with a
      passion for game development and software engineering. My experience spans across software and
      game development to teaching, where I've honed my technical and interpersonal skills. I have
      contributed to projects involving multi-agent systems, full-stack web development, and game
      design, all while maintaining a strong academic record. I'm driven by curiosity and a desire
      to create immersive digital experiences, whether through collaborative game jams or through
      full-stack websites.
    </p>

    <BRow class="justify-content-center">
      <BCol>
        <BImg thumbnail fluid :src="blenderImage" alt="Current blender project for a render" />
      </BCol>
      <BCol>
        <BImg thumbnail fluid :src="multiplayerGameDev" alt="Unity Multiplayer demo" />
      </BCol>
      <BCol>
        <BImg thumbnail fluid :src="constellationWebsite" alt="Constellation Website" />
      </BCol>
    </BRow>

    <section>
      <h1 class="hidden">I do web development</h1>
      <p class="hidden">
        I've developed two full-stack websites as part of my journey in web development. The first
        project was for my web development class, CS 326, where I built the frontend using
        JavaScript, CSS, and HTML, with Express and MongoDB powering the backend. My second project
        is this website, created with TypeScript, Vue, NestJS, and PostgreSQL. Web development is a
        passion of mine, and I’m excited to continue exploring and creating more projects in the
        future.
      </p>
    </section>

    <section>
      <h1 class="hidden">I make games!</h1>
      <p class="hidden">
        "My hobby is game development, primarily in Unity. I collaborated with friends to create a
        game called Spread, an FPS shooter where players face a monster that feeds on local
        materials and creates multiple versions of itself. Currently, I'm working on a multiplayer
        game inspired by Keep Talking and Nobody Explodes. Instead of one person handling the bomb,
        this game challenges two players to work together in a high-stakes scenario to prevent a
        nuclear bomb from detonating.
      </p>
    </section>
    <section>
      <h1 class="hidden">I also make 3D models and sculpt!</h1>
      <p class="hidden">
        I am also passionate about 3D modeling in Blender, a skill I picked up to create models and
        animations for my game development projects. Since then, I have continued to refine my
        skills, working on various 3D modeling projects. Recently, I have focused on creating simple
        renders, like the ones showcased in the home pictures of my current project.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BRow, BCol, BImg } from 'bootstrap-vue-next'

//images
import blenderImage from '../assets/Blender Image.png'
import multiplayerGameDev from '../assets/multiplayer.png'
import constellationWebsite from '../assets/Constellation Website.png'

export default defineComponent({
  name: 'HomeView',
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((element) => {
      observer.observe(element)
    })
  },
  components: {
    BRow,
    BCol,
    BImg
  },
  data() {
    return {
      blenderImage,
      multiplayerGameDev,
      constellationWebsite
    }
  }
})
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

section {
  display: grid;
  place-items: center;
  align-content: center;
  height: 100vh;
  padding: 0 20rem;
}

.hidden {
  opacity: 0;
  transform: translateY(100%);
  transition: all 1s;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

#firstParagraph {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
  background: linear-gradient(to top, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

#center-text {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
  background: linear-gradient(to top, #2217bd, #2e1857);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.centerImages {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>

<style>
#center-text {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
  background: linear-gradient(to top, #2217bd, #2e1857);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
</style>
