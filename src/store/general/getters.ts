import { GetterTree } from "vuex";
import { GeneralState } from "./general-d";
import { SnackbarState } from "./general-d";

export const getters: GetterTree<GeneralState, void> = {
  getSnackbar: (state): SnackbarState => state.snackbar,
};
