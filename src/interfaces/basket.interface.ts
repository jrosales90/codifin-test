import { IProduct } from "./product.interface";

export interface IBasketItem {
  product: IProduct,
  quantity: number;
}