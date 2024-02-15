import ProductItem from "@/components/ProductItem";
import useProduct from "@/hooks/useProduct";
import { IProductFilter } from "@/interfaces/product.interface";
import {
  BasketSelector,
  basketRemoveOne,
  basketUpsertOne,
} from "@/redux/basket/reducer";
import { useReduxDispatch } from "@/redux/store";
import { TProductFilter } from "@/types/product.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const [filters, setFilters] = useState<IProductFilter>({
    name: "",
    price: "",
  });
  const { products, isLoading } = useProduct(filters);
  const dispatch = useReduxDispatch();
  const basket = useSelector(BasketSelector.selectEntities);
  const basketTotal = useSelector(BasketSelector.selectTotal);

  return (
    <main className="flex justify-center items-center flex-col w-full">
      <div className="mt-5 w-full text-center">
        <div className="text-2xl">CODIFIN e-commerce</div>
      </div>
      <div className="w-9/12 m-10">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            className="text-gray-600 placeholder:text-gray-400 outline outline-offset-2 outline-1 outline-gray-400 rounded-md w-1/2 mb-5"
            placeholder="Search by name"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          />
          <select
            className="mb-5"
            value={filters.price}
            onChange={(e) =>
              setFilters({
                ...filters,
                price: e.target.value as TProductFilter,
              })
            }
          >
            <option value="">Select Order</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {!isLoading &&
            products.map((product) => {
              return (
                <ProductItem
                  product={product}
                  key={product.id}
                  added={!!basket[product.id]}
                  onChage={(added: boolean) => {
                    if (added) {
                      dispatch(
                        basketUpsertOne({ product: product, quantity: 1 })
                      );
                    } else {
                      dispatch(basketRemoveOne(product.id));
                    }
                  }}
                />
              );
            })}
        </div>
      </div>
      <div className="absolute right-10 bottom-10">
        <span className="absolute -top-5 -right-3 w-10 bg-blue-100 rounded-full text-center p-2">
          {basketTotal}
        </span>
        <button
          className="bg-blue-600 text-white p-5 rounded-md"
          onClick={() => {
            router.push("/shoping-cart");
          }}
        >
          <Image src="/shopping-cart.svg" width={30} height={30} alt={""} />
        </button>
      </div>
    </main>
  );
}
