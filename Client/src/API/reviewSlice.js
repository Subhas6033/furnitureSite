import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const submitReview = createAsyncThunk(
    "review/submit",
    async (reviewData, { rejectWithValue }) => {
        try {
            const { data } = await api.post(
                "/api/v1/review",
                reviewData
            );
            return data.response;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || {
                    message: "Failed to submit the review",
                }
            );
        }
    }
);

export const getReviews = createAsyncThunk(
    "reviews/get",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.get(
                "/api/v1/review"
            );
            return data.data.findReview;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || {
                    message: "Error fetching the reviews",
                }
            );
        }
    }
);

const initialState = {
    loading: false,
    success: false,
    error: null,
    message: "",
    review: null,
    reviews: [],
    fetchingReviews: false,
};

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        clearReviewState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
            state.message = "";
            state.review = null;
        },
    },

    extraReducers: (builder) => {
        builder
            // Submit Reviews
            .addCase(submitReview.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
                state.message = "";
            })
            .addCase(submitReview.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;

                state.message =
                    action.payload?.message ||
                    "Review submitted successfully";

                state.review =
                    action.payload?.data || null;
            })
            .addCase(submitReview.rejected, (state, action) => {
                state.loading = false;
                state.success = false;

                state.error =
                    action.payload?.message ||
                    "Failed to submit the review";

                state.message = "";
            })
            // Fetch Reviews
            .addCase(getReviews.pending, (state) => {
                state.loading = true;
                state.fetchingReviews = true;
                state.error = null;
            })
            .addCase(getReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.fetchingReviews = false;
                state.error = null;
                state.reviews = action.payload || [];
            })
            .addCase(getReviews.rejected, (state, action) => {
                state.loading = false;
                state.fetchingReviews = false;

                state.error =
                    action.payload?.message ||
                    "Failed to fetch the reviews";
            });
    },
});

export const {
    clearReviewState,
} = reviewSlice.actions;

export default reviewSlice.reducer;