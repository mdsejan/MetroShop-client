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
      }),
      invalidatesTags: ["Category"]
    }),

    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET"
      }),
      providesTags: ["Category"]
    }),

    updateCategory: builder.mutation({
      query: ({ categoryId, token, categoryData }) => ({
        url: `/category/${categoryId}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: categoryData
      }),
      invalidatesTags: ["Category"]
    }),

    deleteCategory: builder.mutation({
      query: ({ token, categoryId }) => ({
        url: `/category/${categoryId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: ["Category"]
    })
  }),
  overrideExisting: false
});

export const {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = categoryApi;
