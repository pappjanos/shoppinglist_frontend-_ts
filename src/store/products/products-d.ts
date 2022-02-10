interface Product {
  unit: string;
  completed: boolean;
  amount: number;
  user: string;
  name: string;
}

export interface ProductsState {
  results: Array<Product>;
  limit: number;
  page: number;
  totalPages: number;
  totalResults: number;
}
