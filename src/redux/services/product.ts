import { IProduct } from '@/interfaces/product.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getProducs: builder.query<IProduct[], {}>({
      query: () => `products/`,
    }),
  }),
})

export const { useGetProducsQuery } = productApi;


