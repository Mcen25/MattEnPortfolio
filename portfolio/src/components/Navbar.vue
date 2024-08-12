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
          <b-navbar-brand href="#">
            <img
              alt="Vue logo"
              class="logo hidden"
              src="@/assets/logo.svg"
              width="100"
              height="80"
            />
          </b-navbar-brand>

          <b-navbar-nav class="mx-auto custom-nav">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item-dropdown text="Projects">
              <b-dropdown-item href="#">Multi-Agent Task in Unity</b-dropdown-item>
              <b-dropdown-item href="#">MRI Tensorflow Project</b-dropdown-item>
              <b-dropdown-item href="#">Constellation Website</b-dropdown-item>
              <b-dropdown-item href="#">Game Jam #14</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
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

.custom-nav {
  margin-top: 25px;
  gap: 30px;
  font-size: large;
  font-weight: 500;
}
</style>
