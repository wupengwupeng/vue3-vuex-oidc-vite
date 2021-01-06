const VUE_APP_OIDC_CONFIG = {
  authority: "http://localhost:7070/auth/realms/myrealm",
  clientId: "myclient",
  redirectUri: "http://localhost:3000/oidc-callback",
  popupRedirectUri: "http://localhost:3000/oidc-popup-callback",
  responseType: "code",
  scope: "openid",
  automaticSilentRenew: true,
  automaticSilentSignin: true,
  silentRedirectUri: "http://localhost:3000/silent-renew-oidc.html",
};

console.log(import.meta.env.VITE_EXPOSED);
console.log(import.meta.env.VITE_APP_OIDC_CONFIG);

export const oidcSettings = JSON.parse(import.meta.env.VITE_APP_OIDC_CONFIG);
