// This file would contain actual API calls for authentication
// For now, we'll just create a skeleton with mock implementations






// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// export interface LoginRequest {
//   email: string
//   password: string
// }

// export interface RegisterRequest {
//   firstName: string
//   lastName: string
//   email: string
//   password: string
//   userType: "Client" | "ServiceProvider"
//   trade?: string
// }

// export interface AuthResponse {
//   user: any
//   token: string
// }

// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
//   endpoints: (builder) => ({
//     login: builder.mutation<AuthResponse, LoginRequest>({
//       query: (credentials) => ({
//         url: "/auth/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//     register: builder.mutation<AuthResponse, RegisterRequest>({
//       query: (userData) => ({
//         url: "/auth/register",
//         method: "POST",
//         body: userData,
//       }),
//     }),
//     verifyPhone: builder.mutation<{ success: boolean }, { phone: string }>({
//       query: (data) => ({
//         url: "/auth/verify-phone",
//         method: "POST",
//         body: data,
//       }),
//     }),
//     verifyOtp: builder.mutation<{ success: boolean }, { otp: string }>({
//       query: (data) => ({
//         url: "/auth/verify-otp",
//         method: "POST",
//         body: data,
//       }),
//     }),
//     forgotPassword: builder.mutation<{ success: boolean }, { email: string }>({
//       query: (data) => ({
//         url: "/auth/forgot-password",
//         method: "POST",
//         body: data,
//       }),
//     }),
//   }),
// })

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useVerifyPhoneMutation,
//   useVerifyOtpMutation,
//   useForgotPasswordMutation,
// } = authApi
