import Product from "~/domain/product";

export interface ProductDTO {
  uid: string;
  product_name: string;
  price: Number;
}

export const productFromDTO = (productDTO: ProductDTO): Product => {
  return {
    id: productDTO.uid,
    name: productDTO.product_name,
    price: productDTO.price,
  };
};
