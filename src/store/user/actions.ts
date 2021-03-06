import { ActionTree } from "vuex";
import { ActionContext } from "vuex";
import { UserState } from "./user-d";

import userService from "../../api/services/userService";
import dummyService from "../../api/services/dummyService";
import productsService from "../../api/services/productsService";
import { parse } from "@/util/jwt";
import router from "../../router";

function setMessage(
  context: ActionContext<UserState, void>,
  message: string,
  color = "red"
) {
  context.dispatch(
    "general/setSnackbar",
    {
      message,
      color,
    },
    { root: true }
  );
}

export const actions: ActionTree<UserState, void> = {
  async login(
    context,
    { email, password }: { email: string; password: string }
  ) {
    try {
      const response = await userService.login({ email, password });
      localStorage.setItem("token", response.data.tokens.access.token);
      //const token = parse(response.data.tokens.access.token);

      context.commit("SET_USER", {
        email: response.data.user.email,
        isloggedIn: true,
        roles: [response.data.user.role],
        id: response.data.user.id,
      });

      // call setAuthToken for all apis here
      dummyService.setAuthToken(response.data.tokens.access.token);
      productsService.setAuthToken(response.data.tokens.access.token);

      setMessage(context, "Succesfull login!", "green");
      router.push({ name: "Home" }).catch(() => {});
    } catch (error: any) {
      setMessage(context, error.response.data.message);
    }
  },

  reloadUserFromLocalStorage(context) {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      context.commit("RELOAD_USER_FROM_LOCAL_STORAGE");

      const tokenFromLocalStorage: string = <string>(
        localStorage.getItem("token")
      );
      // call setAuthToken for all apis here
      dummyService.setAuthToken(tokenFromLocalStorage);
      productsService.setAuthToken(tokenFromLocalStorage);
    } else {
      context.dispatch("logout");
    }
  },

  async register(context, { email, password }) {
    const user = {
      name: "name",
      email,
      password,
    };
    try {
      const registerResp = await userService.register(user);
      const sendVerifEmailResp = await userService.sendVerifyEmail(
        registerResp.data.tokens.access.token
      );
      setMessage(
        context,
        "Registration succesfull! Please check your email address for validate your account!",
        "green"
      );
      router.push({ name: "Login" }).catch(() => {});
    } catch (error: any) {
      setMessage(context, error.response.data.message);
    }
  },

  async logout(context) {
    localStorage.removeItem("token");
    context.commit("LOGOUT_USER");

    // call removeAuthToken for all apis here
    dummyService.removeAuthToken();
    productsService.removeAuthToken();

    router.push({ name: "Login" }).catch(() => {});
  },

  async verifyEmail(context, token) {
    try {
      const response = await userService.verifyEmail(token);
      setMessage(context, "Email verification succesfull!", "green");
      router.push({ name: "Login" }).catch(() => {});
    } catch (error: any) {
      setMessage(
        context,
        error.response.data.message +
          " This account is already verified, or it is not registered yet!"
      );
      router.push({ name: "Register" }).catch(() => {});
    }
  },
};
