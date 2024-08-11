<script lang="ts">
import { defineComponent } from 'vue'
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem,
  BNavForm,
  BFormInput,
  BButton
} from 'bootstrap-vue-next'
import logo from './assets/logo.png'

export default defineComponent({
  name: 'Navbar',
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
    BNavForm,
    BFormInput,
    BButton
  }
})
</script>

<template>
  <BNavbar toggleable="lg" variant="light" bg="light" class="navbar-line">
    <div class="container d-flex justify-content-center align-items-center">
      <BNavbarToggle target="nav-collapse" />
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav class="w-100 d-flex justify-content-center">
          <BNavbarBrand href="#">Matt En's Portfolio</BNavbarBrand>
          <b-nav-item to="/">Home</b-nav-item>
          <!-- <BNavItem href="#">Home</BNavItem> -->
          <b-nav-item to="/about">About</b-nav-item>
          <BNavItemDropdown text="Projects">
            <BDropdownItem href="#">Multi-Agent Task in Unity</BDropdownItem>
            <BDropdownItem href="#">MRI Tensorflow Project</BDropdownItem>
            <BDropdownItem href="#">Constellation Website</BDropdownItem>
            <BDropdownItem href="#">Game Jam #14</BDropdownItem>
          </BNavItemDropdown>
          <BNavItem href="#">Contact</BNavItem>
        </BNavbarNav>
        <!-- Right aligned nav items -->
        <BNavbarNav class="ms-auto mb-2 mb-lg-0">
          <!-- Uncomment and use if needed -->
          <!-- <BNavItemDropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <BDropdownItem href="#">Profile</BDropdownItem>
            <BDropdownItem href="#">Sign Out</BDropdownItem>
          </BNavItemDropdown> -->
        </BNavbarNav>
      </BCollapse>
    </div>
  </BNavbar>
</template>

<style scoped>
.navbar-color {
  background-color: #f8f9fa;
}
.navbar-line {
  border-bottom: 1px solid #cacbcc;
}
</style>
