import { asyncHandler, APIERR, APIRES } from "../Utils/helper.utils.js";
import { sendMail } from "../Utils/mail.utils.js";
import { Review } from "../Models/review.models.js";

// Escape the HTML
const escapeHtml = (value) => {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

const submitReview = asyncHandler(async (req, res) => {
    const { userName, email, review } = req.body;

    // Validate required fields
    if (
        [userName, email, review].some(
            (value) => !value || value.trim() === ""
        )
    ) {
        throw new APIERR(400, "All fields are required");
    }

    // Normalize input
    const normalizedUserName = userName.trim();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedReview = review.trim();
    // Check if email already submitted a review
    const existingReview = await Review.findOne({
        email: normalizedEmail,
    });

    if (existingReview) {
        throw new APIERR(
            409,
            "You have already submitted a review with this email"
        );
    }

    // Save review
    const savedReview = await Review.create({
        userName: normalizedUserName,
        email: normalizedEmail,
        review: normalizedReview,
        isAccepted: false,
    });

    const safeUserName = escapeHtml(normalizedUserName);
    const safeReview = escapeHtml(normalizedReview);

    return res.status(201).json(
        new APIRES(
            201,
            {
                reviewId: savedReview._id,
            },
            "Review submitted successfully",
        )
    );
})

const updateReviewAcceptance = asyncHandler(async (req, res) => {

    const { reviewId } = req.params;

    if (!reviewId) {
        throw new APIERR(
            400,
            "Review ID is required"
        );
    }

    const review = await Review.findById(reviewId);

    if (!review) {
        throw new APIERR(
            404,
            "Review not found"
        );
    }

    review.isAccepted = true;

    await review.save();

    return res.status(200).json(
        new APIRES(
            200,
            review,
            "Review accepted successfully",
        )
    );
});


const getReviews = asyncHandler(async (req,res) => {
    // Get the all accepted reviews from the DB
    const findReview = await Review.find({isAccepted : true}).sort().lean()

    return res.status(200).json(new APIRES(200, {findReview}, "Successfully fetched the reviews"))
})

export {
    submitReview,
    updateReviewAcceptance,
    getReviews
};
