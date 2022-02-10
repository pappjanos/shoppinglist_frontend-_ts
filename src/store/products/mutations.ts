import { MutationTree } from "vuex";
import { ProductsState } from "./products-d";

export const mutations: MutationTree<ProductsState> = {
  SET_FETCHED_PRODUCTS(
    state: ProductsState,
    { results, limit, page, totalPages, totalResults }: ProductsState
  ): void {
    state.results = results;
    state.limit = limit;
    state.page = page;
    state.totalPages = totalPages;
    state.totalResults = totalResults;
  },
};
