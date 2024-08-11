<template>
  <div>

    <h1>Hello, my name is Matthew En!</h1>

    <p class="firstParagraph">I am a computer science student at UMass Amherst! I am entering my fourth year of college and I plan on going to grad school. </p>
   

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
      <img alt="Vue logo" class="logo hidden" src="@/assets/logo.png" width="125" height="125" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
})


</script>

<style scoped>

body{
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

.firstParagraph {
  font-size: 3.0rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
  background: linear-gradient(to top, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
</style>
