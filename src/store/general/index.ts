import { Module } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./state";

import { GeneralState } from "./general-d";

const namespaced = true;

export const general: Module<GeneralState, any> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
