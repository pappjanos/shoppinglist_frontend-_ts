import { GetterTree } from "vuex";
import { UserState } from "./user-d";

export const getters: GetterTree<UserState, void> = {
  user: (state: UserState) => state,
};
