import { GetterTree } from "vuex";
import { UserState } from "./user-d";

export const getters: GetterTree<UserState, void> = {
  getEmail: (state: UserState) => state.email,
  user: (state: UserState) => state,
};
