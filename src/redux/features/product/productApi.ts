import { baseApi } from "@/redux/api/api";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: ({ token, productData }) => ({
        url: "/product",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: productData
      }),
      invalidatesTags: ["Product"]
    }),
    getProduct: builder.query({
      query: () => "/product",
      providesTags: ["Product"]
    }),

    editProduct: builder.mutation({
      query: ({ productId, token, productData }) => ({
        url: `/product/${productId}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: productData
      }),
      invalidatesTags: ["Product"]
    }),

    deleteProduct: builder.mutation({
      query: ({ productId, token }) => ({
        url: `/product/${productId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: ["Product"]
    })
  }),
  overrideExisting: false
});

export const {
  useCreateProductMutation,
  useGetProductQuery,
  useEditProductMutation,
  useDeleteProductMutation
} = productApi;
