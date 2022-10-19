export const ROUTE = {
  PRODUCT_LIST: "",
};

type ReverseMap<T> = T[keyof T];

export type Routes = ReverseMap<typeof ROUTE>;
