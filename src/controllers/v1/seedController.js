import asyncHandler from "express-async-handler";

import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";
import User from "../../models/UserModel.js";
import { ENVIRONMENT } from "../../config/secret.js";
import { USERS_DATA } from "../../constants/data.js";

const checkPermission = () => {
    if (ENVIRONMENT !== "dev") {
        throw new ApiError(403, "Permission denied.");
    }
};

// =====================================================================================================================
// Seed Users
// =====================================================================================================================
export const seedUsers = asyncHandler(async (req, res) => {
    checkPermission();

    await User.deleteMany({});

    // Insert seed data
    const insertedUsers = await User.create(USERS_DATA);

    res.status(201).json(new ApiResponse(201, insertedUsers, "Users inserted successfully."));
});
