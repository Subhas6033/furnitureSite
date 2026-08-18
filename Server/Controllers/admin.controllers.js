import {
    asyncHandler,
    APIERR,
    APIRES,
} from "../Utils/helper.utils.js";
import { sendMail } from "../Utils/mail.utils.js";
import { Admin } from "../Models/admin.models.js";
import {Review} from "../Models/review.models.js"

const registerAdmin = asyncHandler(async (req, res) => {
    const {
        userName,
        email,
        mobileNumber,
        password,
    } = req.body;

    if (
        [userName, email, mobileNumber, password].some(
            (val) => !val || val.trim() === ""
        )
    ) {
        throw new APIERR(400, "All fields are required");
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingAdmin = await Admin.findOne({
        email: normalizedEmail,
    });

    if (existingAdmin) {
        throw new APIERR(
            409,
            "Admin with this email already exists"
        );
    }

    const admin = await Admin.create({
        userName: userName.trim(),
        email: normalizedEmail,
        mobileNumber: mobileNumber.trim(),
        password,
    });

    const accessToken = admin.generateAccessToken();
    const refreshToken = admin.generateRefreshToken();

    admin.refreshToken = refreshToken;

    await admin.save({
        validateBeforeSave: false,
    });

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production"
            ? "none"
            : "lax",
    };

    const adminData = {
        _id: admin._id,
        userName: admin.userName,
        email: admin.email,
        mobileNumber: admin.mobileNumber,
    };

    return res
        .status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new APIRES(
                201,
                {
                    admin: adminData,
                },
                "Admin registered successfully",
            )
        );
});

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (
        !email ||
        !password ||
        email.trim() === "" ||
        password.trim() === ""
    ) {
        throw new APIERR(
            400,
            "Email and password are required"
        );
    }
    const normalizedEmail = email.trim().toLowerCase();
    const admin = await Admin
        .findOne({ email: normalizedEmail })
        .select("+password");
    if (!admin) {
        throw new APIERR(
            401,
            "Invalid email or password"
        );
    }
    const isPasswordValid =
        await admin.comparePassword(password);
    if (!isPasswordValid) {
        throw new APIERR(
            401,
            "Invalid email or password"
        );
    }
    const accessToken =
        admin.generateAccessToken();
    const refreshToken =
        admin.generateRefreshToken();
    admin.refreshToken = refreshToken;
    await admin.save({
        validateBeforeSave: false,
    });
    const loggedInAdmin = {
        _id: admin._id,
        userName: admin.userName,
        email: admin.email,
        mobileNumber: admin.mobileNumber,
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        })
        .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        })
        .json(
            new APIRES(
                200,
                {
                    admin: loggedInAdmin,
                },
                "Admin logged in successfully",
            )
        );
});


const forgotPassword = asyncHandler(async (req, res) => {

    const { email } = req.body;

    if (!email || email.trim() === "") {
        throw new APIERR(
            400,
            "Email is required"
        );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const admin = await Admin.findOne({
        email: normalizedEmail,
    });

    if (!admin) {
        return res.status(200).json(
            new APIRES(
                200,
                "If an account exists with this email, a password reset email has been sent"
            )
        );
    }

    const resetToken = admin.generateAccessToken();

    const resetUrl =
        `${process.env.ADMIN_FRONTEND_URL}/reset-password/${resetToken}`;

    const mailTemplate = `
        <!DOCTYPE html>
        <html>
        <body style="
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            padding: 40px;
        ">
            <div style="
                max-width: 500px;
                margin: auto;
                background: #ffffff;
                padding: 35px;
            ">
                <h2>Reset your password</h2>

                <p>
                    We received a request to reset your Entity Furnitures
                    admin account password.
                </p>

                <p>
                    Click the button below to continue.
                </p>

                <a
                    href="${resetUrl}"
                    style="
                        display: inline-block;
                        padding: 12px 22px;
                        background: #252525;
                        color: #ffffff;
                        text-decoration: none;
                        border-radius: 5px;
                    "
                >
                    Reset Password
                </a>

                <p style="
                    margin-top: 25px;
                    color: #777777;
                    font-size: 13px;
                ">
                    If you did not request this, you can safely ignore
                    this email.
                </p>
            </div>
        </body>
        </html>
    `;

    await sendMail(
        normalizedEmail,
        "Reset Your Admin Password | Entity Furnitures",
        mailTemplate
    );

    return res.status(200).json(
        new APIRES(
            200,
            "If an account exists with this email, a password reset email has been sent"
        )
    );
});


const changePassword = asyncHandler(async (req, res) => {

    const { oldPassword, newPassword } = req.body;

    if (
        !oldPassword ||
        !newPassword ||
        oldPassword.trim() === "" ||
        newPassword.trim() === ""
    ) {
        throw new APIERR(
            400,
            "Old password and new password are required"
        );
    }

    if (newPassword.length < 8) {
        throw new APIERR(
            400,
            "New password must be at least 8 characters long"
        );
    }

    const admin = await Admin
        .findById(req.admin._id)
        .select("+password");

    if (!admin) {
        throw new APIERR(
            404,
            "Admin not found"
        );
    }

    const isPasswordValid =
        await admin.comparePassword(oldPassword);

    if (!isPasswordValid) {
        throw new APIERR(
            401,
            "Current password is incorrect"
        );
    }

    admin.password = newPassword;

    await admin.save();

    return res.status(200).json(
        new APIRES(
            200,
            "Password changed successfully"
        )
    );
});

const getAllReviews = asyncHandler(async (req,res) => {
    const reviews = await Review.find()
    if(!reviews) {
        throw new APIERR(404, "No Reviews Founds")
    }

    res.status(200).json(new APIRES(200, reviews, "Successfully fetched all the reviews"))
})

export {
    registerAdmin,
    loginAdmin,
    forgotPassword,
    changePassword,
    getAllReviews
};