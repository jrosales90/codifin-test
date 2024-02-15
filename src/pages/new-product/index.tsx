import SmallError from "@/components/SmallError";
import { IProduct } from "@/interfaces/product.interface";
import { productSchema } from "@/schemas/product.schema";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormErrors = Partial<{ [P in keyof IProduct]: string }>;
type MKey = "id" | "name" | "price" | "image";

export default function NewProduct() {
  const router = useRouter();
  const [product, setProduct] = useState<IProduct>({
    id: 0,
    name: "",
    price: 0,
    image: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mName = e.target.name as MKey;
    setProduct({
      ...product,
      [mName]: mName === "price" ? parseFloat(e.target.value) : e.target.value,
    });

    if (errors[mName]) {
      setErrors({ ...errors, [mName]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = productSchema.safeParse(product);

    if (!result.success) {
      const newErrors: FormErrors = {};
      for (const error of result.error.errors) {
        newErrors[error.path[0] as MKey] = error.message;
      }
      setErrors(newErrors);
      return;
    }

    setErrors({});
    router.push("/");
  };

  return (
    <main className="flex flex-col items-center">
      <div className="mt-5 w-full text-center">
        <div className="text-2xl mb-5">Producto</div>
      </div>
      <form className="grid gap-2 px-4" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <label className="w-32 text-right pr-4 font-bold text-gray-700">
            Name
          </label>
          <div className="flex flex-col w-full">
            <input
              value={product.name}
              onChange={handleChange}
              placeholder="name"
              type="text"
              name="name"
              className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            />
            <SmallError text={errors.name} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="w-32 text-right pr-4 font-bold text-gray-700">
            Price
          </label>
          <div className="flex flex-col w-full">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            />
            <SmallError text={errors.price} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="w-32 text-right pr-4 font-bold text-gray-700">
            Image
          </label>
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="w-full rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            />
            <SmallError text={errors.image} />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="bg-green-300 py-2 px-6 rounded-lg text-white"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </main>
  );
}
