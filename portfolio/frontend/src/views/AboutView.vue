<template>
  <div>
    <h1 id="center-text">How this website was made!</h1>

    <section>
      <p>
        This is a portfolio website built on Vue.js, Bootstrap-vue-next, TypeScript, NestJS,
        TypeORM, and PostgreSQL. The website displays my summary, how the website was made, some of
        my projects, and a contact form.
      </p>

      <h2 id="center-text-h2">Here is a link to the github page:</h2>
      <a href="https://github.com/Mcen25/Portfolio-Website" target="_blank">
        https://github.com/Mcen25/Portfolio-Website
      </a>

      <p>
        The project is built inside the portfolio root directory which diverges into two different
        folders: frontend and backend. In frontend there are app.vue, main.ts, views, router,
        components, and assets. In backend there are main.ts, app.module.ts, app.controller.ts, the
        form folder, the dtos in form, related CRUD operations for form.
      </p>
    </section>

    <section class="custom-background">
      <h1 id="center-text">Frontend</h1>
      <p>
        This is a portfolio website built on Vue.js, Bootstrap-vue-next, TypeScript, NestJS,
        TypeORM, and PostgreSQL. The website displays my summary, how the website was made, some of
        my projects, and a contact form.
      </p>
    </section>

    <section class="custom-background">
      <h1 id="center-text">Backend</h1>
      <p>
        This is a portfolio website built on Vue.js, Bootstrap-vue-next, TypeScript, NestJS,
        TypeORM, and PostgreSQL. The website displays my summary, how the website was made, some of
        my projects, and a contact form.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>

<style scoped>
section {
  display: grid;
  place-items: center;
  align-content: center;
  padding: 0 20rem;
}

#center-text-h2 {
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 1rem;
  background: linear-gradient(to top, #2217bd, #2e1857);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.custom-background {
  background-color: #f8f9fa;
  margin-bottom: 2%;
}
</style>
