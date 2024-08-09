<template>
  <b-navbar toggleable="lg" class="navbar-color">
    <div class="container d-flex justify-content-center">
      <b-navbar-brand href="#"> Matthew En's Portfolio </b-navbar-brand>

      <div class="d-flex justify-content-center">
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
            <b-nav-item href="#">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </div>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from './assets/logo.png'

export default defineComponent({
  name: 'Navbar'
})
</script>

<style scoped>
.navbar-color {
  background-color: #f8f9fa;
}
</style>
