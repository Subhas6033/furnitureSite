import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "../API/reviewSlice";
import adminReducer from "../API/adminSlice"

export const store = configureStore({
    reducer: {
        review: reviewReducer,
        admin : adminReducer
    },
});