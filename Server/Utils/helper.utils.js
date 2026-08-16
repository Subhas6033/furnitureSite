const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        try {
            await requestHandler(req, res, next);
        } catch (error) {
            console.error("Error from asyncHandler:", error);

            return res
                .status(error.statusCode || 500)
                .json({
                    success: false,
                    data: error.data || null,
                    message: error.message || "Something went wrong",
                    errors: error.errors || [],
                });
        }
    };
};


class APIERR extends Error {
    constructor(
        statusCode = 500,
        data = null,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);

        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}


class APIRES {
    constructor(
        statusCode = 200,
        data = null,
        message = "Success",
        success = true
    ) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = success;
    }
}


export {
    asyncHandler,
    APIERR,
    APIRES,
};