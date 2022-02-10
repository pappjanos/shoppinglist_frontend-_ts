import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { user } from "./user/index";
import { general } from "./general/index";
import { products } from "./products/index";

Vue.use(Vuex);

const store: StoreOptions<any> = {
  modules: {
    user,
    general,
    products,
  },
};

export default new Vuex.Store<any>(store);
