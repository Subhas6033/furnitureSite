import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "../API/reviewSlice";

export const store = configureStore({
    reducer: {
        review: reviewReducer,
    },
});