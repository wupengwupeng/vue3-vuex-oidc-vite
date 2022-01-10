<template>
  <AppBar />
  <router-view></router-view>
</template>

<script lang="ts">
import AppBar from "../components/AppHeader.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  components: {
    AppBar,
  },
});
</script>