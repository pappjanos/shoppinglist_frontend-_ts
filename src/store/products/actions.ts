import { ActionTree } from "vuex";
import { ProductsState } from "./products-d";
import productsService from "../../api/services/productsService";
import { ActionContext } from "vuex";
import { AxiosResponse } from "axios";

function setMessage(
  context: ActionContext<ProductsState, void>,
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

export const actions: ActionTree<ProductsState, void> = {
  async getAllProducts(context) {
    try {
      const response: AxiosResponse<ProductsState> =
        await productsService.fetchProducts();
      console.log(response);
      context.commit("SET_FETCHED_PRODUCTS", response.data);
    } catch (error: any) {
      setMessage(context, "Server connection error!");
    }
  },
};
