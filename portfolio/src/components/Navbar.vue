<template>
  <b-navbar toggleable="lg" class="navbar-color">
    <b-navbar-brand href="#">Matthew En's Portfolio</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item-dropdown text="Projects" right>
          <b-dropdown-item href="">Multi-Agent Task in Unity</b-dropdown-item>
          <b-dropdown-item href="#">MRI Project</b-dropdown-item>
          <b-dropdown-item href="#">Constellation Website</b-dropdown-item>
          <b-dropdown-item href="#">Game Jam #14 -- Spread</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
})
</script>

<style scoped>
.navbar-color {
  background-color: #415a77;
}

.nav-item-no-dot {
  list-style-type: none;
}
</style>
