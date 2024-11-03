import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://metro-shop-server.vercel.app/api"
    // baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["User", "Category"],
  endpoints: () => ({})
});

export const {} = baseApi;
