import { MutationTree } from "vuex";
import { UserState } from "./user-d";

export const mutations: MutationTree<UserState> = {
  SET_USER(state: UserState, to: UserState) {
    state.email = to.email;
    state.id = to.id;
    state.isLoggedIn = true;
    state.roles = to.roles;

    localStorage.setItem("user", JSON.stringify(to));
  },
  LOGOUT_USER(state: UserState) {
    localStorage.removeItem("user");
    state.email = "";
    state.id = "";
    state.isLoggedIn = false;
    state.roles = [];
  },
  RELOAD_USER_FROM_LOCAL_STORAGE(state) {
    const { email, id, roles }: UserState = <UserState>(
      JSON.parse(<string>localStorage.getItem("user"))
    );
    state.email = email;
    state.id = id;
    state.isLoggedIn = email ? true : false;
    state.roles = roles;
  },
};
