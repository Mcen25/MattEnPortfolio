<template>
  <div>
    <h1 id="center-text">Hello, my name is Matthew En!</h1>

    <p id="firstParagraph">
      I am a dedicated Computer Science student at the University of Massachusetts Amherst with a
      passion for game development and astrophotography. My experience spans across software
      development, teaching, and retail, where I've honed my technical and interpersonal skills. I
      have contributed to projects involving multi-agent systems, full-stack web development, and
      game design, all while maintaining a strong academic record. I'm driven by curiosity and a
      desire to create immersive digital experiences, whether through collaborative game jams or
      complex AI systems.
    </p>

    <BRow class="justify-content-center">
      <BCol>
        <BImg thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
        <!-- <img alt="Vue logo" class="logo hidden" src="@/assets/logo.svg" width="100" height="80" /> -->
      </BCol>
      <BCol>
        <BImg thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2" />
      </BCol>
      <BCol>
        <BImg thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3" />
      </BCol>
    </BRow>

    <section>
      <h1 class="hidden">I do web development</h1>
      <p class="hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>

    <section>
      <h1 class="hidden">I make games</h1>
      <p class="hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
    <section>
      <h1 class="hidden">I like to 3D model and sculpt</h1>
      <p class="hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BRow, BCol, BImg } from 'bootstrap-vue-next'
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
