import { IProduct, IProductFilter } from "@/interfaces/product.interface";
import { useGetProducsQuery } from "@/redux/services/product";
import { TProductFilter } from "@/types/product.type";
import { useMemo } from "react";

const useProduct = ({ name, price }: IProductFilter) => {
  const { data, isLoading } = useGetProducsQuery({});

  const products = useMemo(() => {
    let result = data || [];

    if (name && name !== "") {
      result = result.filter((product: IProduct) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (price === "asc") {
      result = [...result].sort(
        (a: IProduct, b: IProduct) => a.price - b.price
      );
    } else if (price === "desc") {
      result = [...result].sort(
        (a: IProduct, b: IProduct) => b.price - a.price
      );
    }

    return result;
  }, [data, name, price]);

  return { products, isLoading };
}

export default useProduct;