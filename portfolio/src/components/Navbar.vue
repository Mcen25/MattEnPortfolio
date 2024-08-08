<template>
  <div>
    <b-navbar toggleable="lg" class="custom-navbar">
      <b-navbar-brand href="#">Matthew En's Portfolio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="custom-navbar">Home</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Projects</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
})
</script>

<style scoped>
.custom-navbar {
  background-color: #14213d; /* Custom background color */
  color: #e0e1dd; /* Custom text color */
}

.custom-navbar .navbar-brand,
.custom-navbar .nav-link {
  color: #e0e1dd; /* Custom link color */
}

.custom-navbar .nav-link:hover {
  color: #ffd700; /* Custom hover color */
}
</style>
