import { Module } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./state";

import { UserState } from "./user-d";

const namespaced = true;

export const user: Module<UserState, any> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
