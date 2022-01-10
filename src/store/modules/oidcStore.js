import { vuexOidcCreateStoreModule } from "vuex-oidc";
import { VUE_APP_OIDC_CONFIG } from "./../../config/oidc";

const oidcStore = vuexOidcCreateStoreModule(
  VUE_APP_OIDC_CONFIG,
  {
    namespaced: true,
    dispatchEventsOnWindow: true,
    isAuthenticatedBy: "access_token",
  },
  // Optional OIDC event listeners
  {
    userLoaded: (user) => console.log("OIDC user is loaded:", user),
    userUnloaded: () => console.log("OIDC user is unloaded"),
    accessTokenExpiring: () => console.log("Access token will expire"),
    accessTokenExpired: () => console.log("Access token did expire"),
    silentRenewError: () => console.log("OIDC user is unloaded"),
    userSignedOut: () => console.log("OIDC user is signed out"),
    oidcError: (payload) => console.log("OIDC error", payload),
    automaticSilentRenewError: (payload) =>
      console.log("OIDC automaticSilentRenewError", payload),
  }
);

export default oidcStore;
