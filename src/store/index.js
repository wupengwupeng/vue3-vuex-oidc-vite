import { createStore } from "vuex";
import oidcStore from "./modules/oidcStore";

const store = createStore({
  modules: { oidcStore },
});

export default store;
