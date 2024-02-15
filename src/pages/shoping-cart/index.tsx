import ProductItem from "@/components/ProductItem";
import { BasketSelector, basketRemoveOne } from "@/redux/basket/reducer";
import { useReduxDispatch } from "@/redux/store";
import { useSelector } from "react-redux";

export default function ShopingCart() {
  const dispatch = useReduxDispatch();
  const basket = useSelector(BasketSelector.selectAll);

  return (
    <main className="flex justify-center items-center flex-col w-full">
      <div className="grid grid-cols-2 gap-4">
        {basket.map((item) => {
          return (
            <ProductItem
              added
              product={item.product}
              key={item.product.id}
              onChage={(_) => {
                dispatch(basketRemoveOne(item.product.id));
              }}
            />
          );
        })}
      </div>
    </main>
  );
}
