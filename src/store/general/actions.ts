import { ActionTree } from "vuex";
import { GeneralState } from "./general-d";
import { SnackbarState } from "./general-d";

export const actions: ActionTree<GeneralState, void> = {
  setSnackbar(context, to: SnackbarState): void {
    const settings: SnackbarState = {
      status: true,
      message: to.message,
      timeout: 5000,
      color: to.color,
    };
    context.commit("SET_SNACKBAR", settings);
  },

  closeSnackbar(context) {
    context.commit("CLOSE_SNACKBAR", false);
  },
};
