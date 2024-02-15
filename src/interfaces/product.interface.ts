import { TProductFilter } from "@/types/product.type";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface IProductFilter {
  name: string;
  price: TProductFilter | "";
}