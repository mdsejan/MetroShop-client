import { baseApi } from "@/redux/api/api";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo
      })
    }),
    signup: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo
      })
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/auth/user/${id}`,
        method: "GET"
      }),
      providesTags: ["User"]
    }),

    getAllUser: builder.query({
      query: (token) => ({
        url: `/auth/users/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      providesTags: ["User"]
    })
  }),
  overrideExisting: false
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetUserQuery,
  useGetAllUserQuery
} = authApi;
