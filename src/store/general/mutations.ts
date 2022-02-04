import { MutationTree } from "vuex";
import { GeneralState } from "./general-d";
import { SnackbarState } from "./general-d";

export const mutations: MutationTree<GeneralState> = {
  SET_SNACKBAR(state: GeneralState, to: SnackbarState): void {
    state.snackbar = to;
  },
  CLOSE_SNACKBAR(state: GeneralState): void {
    state.snackbar.status = false;
  },
};
