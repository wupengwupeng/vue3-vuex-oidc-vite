<template>
  <div>
    <h1>Protected</h1>
    <p>This a secured page</p>
    <SignedInUser />
  </div>
</template>

<script>
import SignedInUser from "../components/SignedInUser.vue";

export default {
  components: { SignedInUser },
};
</script>

<style></style>
