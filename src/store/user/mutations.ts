import { MutationTree } from "vuex";
import { UserState } from "./user-d";

export const mutations: MutationTree<UserState> = {
  SET_EMAIL(state: UserState, to: string) {
    state.email = to;
  },

  SET_USER(state: UserState, to: UserState) {
    state = to;
    localStorage.setItem("user", JSON.stringify(to));
  },
  LOGOUT_USER(state) {
    localStorage.removeItem("user");
    state = {
      email: "",
      isLoggedIn: false,
      roles: [],
      id: "",
    };
  },
  RELOAD_USER_FROM_LOCAL_STORAGE(state) {
    state = <UserState>JSON.parse(<string>localStorage.getItem("user"));
  },
};
