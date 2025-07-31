import axios from "axios";
import userStore from "@/zustand/userStore";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({ baseURL });

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const token = userStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default api;
