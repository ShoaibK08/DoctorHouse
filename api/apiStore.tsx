import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";

export const apiStore = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (GDM) => GDM().concat(baseApi.middleware),
});
