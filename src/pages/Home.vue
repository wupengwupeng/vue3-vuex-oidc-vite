<template>
  <div>
    <h1>Home</h1>
    <p>This a non-secured page</p>
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
