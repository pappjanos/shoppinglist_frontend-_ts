import { Module } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./state";

import { ProductsState } from "./products-d";

const namespaced = true;

export const products: Module<ProductsState, any> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
