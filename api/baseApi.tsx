import userStore from "@/zustand/userStore";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchBaseQueryCb = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = userStore.getState().token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQueryCb,
  tagTypes: ["user", "product", "order", "review", "coupon"],
  endpoints: (builder) => ({
    getLanguageJson: builder.query({
      query: (languageId) => `Form/${languageId}`,
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
    }),
    // coupons
    // getAllCoupons: builder.query({
    //   query: ({ page, limit, search }) => `coupon/get/all?page=${page}&limit=${limit}&search=${search}`,
    //   providesTags: ["coupon"],
    // }),
    // checkCoupon: builder.mutation({
    //   query: (data) => ({
    //     url: `coupon/check-status`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["coupon"],
    // }),
  }),
});
export const {
  useGetLanguageJsonQuery,
  useRegisterMutation,
  useLoginMutation,
} = baseApi;
