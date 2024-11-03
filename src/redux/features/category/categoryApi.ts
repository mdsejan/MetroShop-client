import { baseApi } from "@/redux/api/api";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: ({ categoryInfo, token }) => ({
        url: "/category",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: categoryInfo
      })
    }),

    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET"
      })
    }),

    deleteCategory: builder.mutation({
      query: ({ token, categoryId }) => ({
        url: `/rooms/${categoryId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  }),
  overrideExisting: false
});

export const {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useDeleteCategoryMutation
} = categoryApi;
