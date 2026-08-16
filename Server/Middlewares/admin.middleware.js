import { asyncHandler, APIERR } from "../Utils/helper.utils.js";
import { Admin } from "../Models/admin.models.js";
import jwt from "jsonwebtoken";

export const adminAuthMiddleware = asyncHandler(async (req, res, next) => {

    const token = req.cookies?.accessToken;

    if (!token) {
        throw new APIERR(401, "Unauthorized access");
    }

    try {

        const decodedToken = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET
        );

        const admin = await Admin.findById(
            decodedToken._id
        ).select("-password -refreshToken");

        if (!admin) {
            throw new APIERR(
                401,
                "Invalid access token"
            );
        }

        req.admin = admin;

        next();

    } catch (error) {

        if (error instanceof APIERR) {
            throw error;
        }

        throw new APIERR(
            401,
            "Invalid or expired access token"
        );
    }
});