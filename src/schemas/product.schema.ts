import { z } from "zod";
export const productSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  price: z.number().min(1, { message: "Price must be a positive number" }),
  image: z.string().min(1, { message: "Image URL is required" }),
});