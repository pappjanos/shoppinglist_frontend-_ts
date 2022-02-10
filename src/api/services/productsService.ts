import Service from "../abstract/service";
import Api from "../../../apis/api.json";

class ProductsService extends Service {
  constructor() {
    super(Api[window.location.host].PRODUCT_SERVICE_URL);
  }
  fetchProducts() {
    return this.api.get("/");
  }
  fetchProduct(id: string) {
    return this.api.get(`/${id}`);
  }
  deleteProduct(id: string) {
    return this.api.delete(`/${id}`);
  }
  updateProduct() {
    // return this.api.patch({});
  }
  createProduct() {
    // return this.api.post()
  }
}

const productsService = new ProductsService();

export default productsService;
