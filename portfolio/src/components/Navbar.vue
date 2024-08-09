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
  <!-- <b-navbar toggleable="lg" class="navbar-color">
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
  </b-navbar> -->

  <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">
    <BNavbarBrand href="#">NavBar</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem href="#">Link</BNavItem>
        <BNavItem href="#" disabled>Disabled</BNavItem>
      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItemDropdown text="Lang" right>
          <BDropdownItem href="#">EN</BDropdownItem>
          <BDropdownItem href="#">ES</BDropdownItem>
          <BDropdownItem href="#">RU</BDropdownItem>
          <BDropdownItem href="#">FA</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <BDropdownItem href="#">Profile</BDropdownItem>
          <BDropdownItem href="#">Sign Out</BDropdownItem>
        </BNavItemDropdown>
      </BNavbarNav>
      <BNavForm class="d-flex">
        <BFormInput class="me-2" placeholder="Search" />
        <BButton type="submit" variant="outline-success">Search</BButton>
      </BNavForm>
    </BCollapse>
  </BNavbar>
</template>

<style scoped>
.navbar-color {
  background-color: #f8f9fa;
}
</style>
