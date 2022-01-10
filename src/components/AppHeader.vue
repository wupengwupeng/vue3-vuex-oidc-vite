<template>
  <div id="app">
    <div id="nav">
      <span v-for="link in links" :key="link.to">
        <router-link :key="link.to" :to="link.to">
          {{ link.title }}
        </router-link>
        <span> | </span>
      </span>
      <a v-if="oidcIsAuthenticated" href @click.prevent="signOut">Sign out</a>
      <a v-else href @click.prevent="authenticateOidcPopup">Sign in</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      links: [
        { title: "Home", to: "/" },
        { title: "Protected", to: "/protected" },
      ],
    };
  },
  computed: {
    ...mapGetters("oidcStore", ["oidcIsAuthenticated"]),
  },
  methods: {
    ...mapActions("oidcStore", [
      "authenticateOidcPopup",
      "removeOidcUser",
      "signOutOidc",
    ]),

    signOut: function () {
      this.signOutOidc().then(() => {
        this.removeOidcUser().then(() => {
          this.$router.push("/");
        });
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
