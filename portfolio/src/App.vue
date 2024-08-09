<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    navbar,
    RouterLink,
    RouterView
  }
  // setup() {
  //   const state = reactive({
  //     name: 'Link',
  //     age: 25 as string | number
  //   })

  //   return { ...toRefs(state) }

  //   const name = ref('Link')
  // },
  // methods: {
  //   changeName(name: string) {
  //     this.name = name
  //   }
  // }
})
</script>

<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <router-view />
  </div>
</template>

<style scoped></style>
