import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "./reviewSlice";

export const loginAdmin = createAsyncThunk(
    "admin/login",
    async (loginData, { rejectWithValue }) => {
        try {
            const { data } = await api.post(
                "/api/v1/admin/login",
                loginData
            );
            return data.response;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message ||
                error.response?.data?.error ||
                "Unable to login. Please try again."
            );
        }
    }
);

export const updateReview = createAsyncThunk(
    "admin/updateReview",
    async (reviewId, { rejectWithValue }) => {
        try {
            const { data } = await api.put(
                `/api/v1/review/${reviewId}/accept`
            );
            return data;
        } catch (error) {
            console.error(
                "Update review error:",
                error.response?.data || error
            );
            return rejectWithValue(
                error.response?.data?.message ||
                error.response?.data?.error ||
                "Unable to accept review. Please try again."
            );
        }
    }
);

const initialState = {
    loading: false,
    reviewLoading: false,

    error: null,
    reviewError: null,

    success: false,
    reviewSuccess: false,

    message: "",
    reviewMessage: "",

    admin: null,
    updatedReview: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        clearAdminState: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
            state.message = "";
        },
        clearReviewUpdateState: (state) => {
            state.reviewLoading = false;
            state.reviewError = null;
            state.reviewSuccess = false;
            state.reviewMessage = "";
            state.updatedReview = null;
        },
        logoutAdmin: (state) => {
            state.admin = null;
            state.loading = false;
            state.error = null;
            state.success = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            // Admin login
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
                state.message = "";
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.admin = action.payload;
                state.message =
                    action.payload?.message ||
                    "Login successful.";
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    action.error?.message ||
                    "Login failed.";
                state.message = state.error;
            })
            // Update Review
            .addCase(updateReview.pending, (state) => {
                state.reviewLoading = true;
                state.reviewError = null;
                state.reviewSuccess = false;
                state.reviewMessage = "";
            })
            .addCase(updateReview.fulfilled, (state, action) => {
                state.reviewLoading = false;
                state.reviewSuccess = true;
                state.reviewError = null;
                state.updatedReview = action.payload?.data || null;
                state.reviewMessage =
                action.payload?.message ||
                "Review accepted successfully.";
            })
            .addCase(updateReview.rejected, (state, action) => {
                state.reviewLoading = false;
                state.reviewSuccess = false;
                state.reviewError =
                action.payload ||
                action.error?.message ||
                "Unable to accept review.";
                state.reviewMessage = state.reviewError;
            });
    },
});

export const {
    clearAdminState,
    clearReviewUpdateState,
    logoutAdmin,
} = adminSlice.actions;

export default adminSlice.reducer;