import { BaseApiService } from "../baseApi.service";

class ProductService extends BaseApiService {
  constructor() {
    super();
  }
  getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 1500);
    });
  }
}
export const useProductService = () => new ProductService();
