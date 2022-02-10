import { ProductsState } from "./products-d";

const initProductState = {
  results: [],
  limit: 0,
  page: 0,
  totalPages: 0,
  totalResults: 0,
};

export const state: ProductsState = initProductState;
