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

    const reviewMailTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    />

    <title>Thank you for your review</title>
</head>

<body style="
    margin: 0;
    padding: 0;
    background: #f5f3ef;
    font-family: Arial, Helvetica, sans-serif;
    color: #252525;
">

    <div style="
        width: 100%;
        padding: 40px 15px;
        box-sizing: border-box;
    ">

        <div style="
            max-width: 560px;
            margin: 0 auto;
            background: #ffffff;
        ">

            <!-- Brand -->

            <div style="
                padding: 32px 36px 24px;
                border-bottom: 1px solid #eeeeee;
            ">

                <p style="
                    margin: 0;
                    font-size: 18px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    color: #252525;
                ">
                    ENTITY FURNITURES
                </p>

            </div>


            <!-- Main Content -->

            <div style="
                padding: 42px 36px 38px;
            ">

                <p style="
                    margin: 0 0 12px;
                    font-size: 14px;
                    color: #8a8177;
                    letter-spacing: 0.5px;
                ">
                    REVIEW RECEIVED
                </p>


                <h1 style="
                    margin: 0 0 22px;
                    font-size: 30px;
                    line-height: 1.25;
                    font-weight: 500;
                    color: #252525;
                ">
                    Thank you, ${safeUserName}.
                </h1>


                <p style="
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.7;
                    color: #5f5f5f;
                ">
                    Thanks for taking the time to share your experience
                    with Entity Furnitures. We appreciate your feedback.
                </p>


                <!-- Review -->

                <div style="
                    margin-top: 32px;
                    padding: 24px;
                    background: #f8f7f5;
                    border: 1px solid #ebe8e3;
                ">

                    <p style="
                        margin: 0 0 14px;
                        font-size: 12px;
                        font-weight: 600;
                        letter-spacing: 1px;
                        color: #8a8177;
                    ">
                        YOUR REVIEW
                    </p>


                    <p style="
                        margin: 0;
                        font-size: 15px;
                        line-height: 1.7;
                        color: #333333;
                    ">
                        ${safeReview}
                    </p>

                </div>


                <p style="
                    margin: 30px 0 0;
                    font-size: 15px;
                    line-height: 1.7;
                    color: #5f5f5f;
                ">
                    We look forward to serving you again.
                </p>


                <p style="
                    margin: 30px 0 0;
                    font-size: 15px;
                    line-height: 1.6;
                    color: #333333;
                ">
                    Warm regards,<br />

                    <strong style="
                        font-weight: 600;
                    ">
                        Entity Furnitures
                    </strong>
                </p>

            </div>


            <!-- Footer -->

            <div style="
                padding: 24px 36px;
                border-top: 1px solid #eeeeee;
                background: #fafafa;
            ">

                <p style="
                    margin: 0;
                    font-size: 12px;
                    line-height: 1.6;
                    color: #999999;
                ">
                    You are receiving this email because a review
                    was submitted using this email address.
                </p>


                <p style="
                    margin: 12px 0 0;
                    font-size: 12px;
                    color: #999999;
                ">
                    © ${new Date().getFullYear()} Entity Furnitures
                </p>

            </div>

        </div>

    </div>

</body>

</html>
`;

    // Send confirmation email
await sendMail(
            normalizedEmail,
            "Thank You for Your Review | Entity Furnitures",
            reviewMailTemplate
        );


    return res.status(201).json(
        new APIRES(
            201,
            {
                reviewId: savedReview._id,
            },
            "Review submitted successfully",
        )
    );
});

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
