<template>
  <!-- <AppHeader /> -->
  <router-view></router-view>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
