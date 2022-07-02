<template>
  <div id="app">
    <NavBar />
    <TicketSearch />
    <Footer />
  </div>
</template>

<script>
import {
  BNavbarNav,
  BNavbarBrand,
  BNavItemDropdown,
  BCollapse,
  BDropdownItem,
  BNavItem,
  BNavForm,
} from "bootstrap-vue";
import TicketSearch from "./components/tickets/TicketSearch.vue";
import NavBar from "./components/layouts/NavBar.vue";
import Footer from "./components/layouts/Footer.vue";
export default {
  components: {
    BNavItemDropdown,
    BCollapse,
    BDropdownItem,
    BNavItem,
    BNavForm,
    BNavbarNav,
    BNavbarBrand,
    TicketSearch,
    NavBar,
    Footer,
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>