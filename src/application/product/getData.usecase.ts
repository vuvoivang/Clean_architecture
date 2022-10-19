import { formatResponse } from "~/adapters/api.helper";
import { useProductService } from "~/adapters/app-service/product.service";
import { globalActions } from "~/adapters/redux/global";
import { useAppDispatch } from "~/adapters/redux/hooks";
import Product from "~/domain/product";
import { ProductDTO, productFromDTO } from "~/dto/product";
import { ProductServiceApp } from "./ports";

export function useGetData() {
  const productService: ProductServiceApp = useProductService();
  const dispatch = useAppDispatch();

  async function getData(): Promise<Product[]> {
    try {
      dispatch(globalActions.startLoading());
      const productList = await productService.getData();
      dispatch(globalActions.endLoading());
      // map product list with app logic
      return formatResponse<ProductDTO[]>(productList)
        ?.map((item) => productFromDTO(item))
        .filter((product) => product.name.startsWith("Laptop Asus"));
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  return {
    getData,
  };
}
