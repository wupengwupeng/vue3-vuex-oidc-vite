import { createRouter, createWebHistory } from "vue-router";
import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";
import Home from "./pages/Home.vue";
import OidcCallback from "./pages/OidcCallback.vue";
import OidcPopupCallback from "./pages/OidcPopupCallback.vue";
import OidcCallbackError from "./pages/OidcCallbackError.vue";
import SilentSignInCallback from "./pages/SilentSignInCallback.vue";
import store from "./store/index";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      isPublic: true,
    },
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import("./pages/Protected.vue"),
  },
  {
    path: "/oidc-callback", // Needs to match redirectUri in you oidcSettings
    name: "oidcCallback",
    component: OidcCallback,
  },
  {
    path: "/oidc-popup-callback", // Needs to match popupRedirectUri in you oidcSettings
    name: "oidcPopupCallback",
    component: OidcPopupCallback,
  },
  {
    path: "/silent-renew-oidc.html", // Needs to match popupRedirectUri in you oidcSettings
    name: "silentSignInCallback",
    component: SilentSignInCallback,
  },
  {
    path: "/oidc-callback-error", // Needs to match redirect_uri in you oidcSettings
    name: "oidcCallbackError",
    component: OidcCallbackError,
    meta: {
      isPublic: true,
    },
  },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(vuexOidcCreateRouterMiddleware(store, "oidcStore"));

export default router;
