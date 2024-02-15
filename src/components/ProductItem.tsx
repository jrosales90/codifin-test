import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";

interface IProductItem {
  product: IProduct;
  added: boolean;
  onChage: (added: boolean) => void;
}

export default function ProductItem({ product, added, onChage }: IProductItem) {
  return (
    <div className="shadow-xl p-4 flex flex-row gap-4 justify-around">
      <div className="flex flex-row gap-2">
        <Image alt={product.name} src={product.image} height={50} width={50} />{" "}
        <div className="flex flex-col">
          <label className="capitalize text-xl">{product.name}</label>
          <label className="text-gray-600">${product.price}</label>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <button
          onClick={() => {
            onChage(!added);
          }}
          className="bg-blue-50 shadow-md p-1 text-xl w-10 rounded-sm"
        >
          {!added ? "+" : "-"}
        </button>
      </div>
    </div>
  );
}
