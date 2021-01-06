<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("oidcStore", ["oidcSignInPopupCallback"]),
  },
  created() {
    this.oidcSignInPopupCallback(window.location.href.split("?")[1]).catch(
      (err) => {
        console.error(err); // Handle errors any way you want
      }
    );
  },
};
</script>

<style></style>
