import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^[6-9]\d{9}$/;

const adminSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true, "Username is required"],
            trim: true,
            minlength: [
                2,
                "Username must be at least 2 characters long",
            ],
            maxlength: [
                50,
                "Username cannot be more than 50 characters long",
            ],
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,

            validate: {
                validator: (email) => mailRegex.test(email),
                message: "Please provide a valid email address",
            },
        },

        mobileNumber: {
            type: String,
            required: [true, "Mobile number is required"],
            trim: true,

            validate: {
                validator: (mobileNumber) =>
                    mobileRegex.test(mobileNumber),
                message: "Please provide a valid mobile number",
            },
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [
                8,
                "Password must be at least 8 characters long",
            ],
            select: false,
        },

        refreshToken: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

adminSchema.pre("save", async function () {
    // Don't hash password if it hasn't been modified
    if (!this.isModified("password")) {
        return
    }
    try {
        const saltRounds = 12;
        this.password = await bcrypt.hash(
            this.password,
            saltRounds
        );
    } catch (error) {
     console.log("Err While hashing the password")   
    }
});

adminSchema.methods.comparePassword = async function (
    candidatePassword
) {
    return await bcrypt.compare(
        candidatePassword,
        this.password
    );
};

adminSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "15m",
        }
    );
};

adminSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d",
        }
    );
};

export const Admin = model("Admin", adminSchema);