import { GetterTree } from "vuex";
import { ProductsState } from "./products-d";

export const getters: GetterTree<ProductsState, void> = {
  products: (state): ProductsState => state,
};
