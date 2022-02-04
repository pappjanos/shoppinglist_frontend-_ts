import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { user } from "./user/index";
import { general } from "./general/index";

Vue.use(Vuex);

const store: StoreOptions<any> = {
  modules: {
    user,
    general,
  },
};

export default new Vuex.Store<any>(store);
