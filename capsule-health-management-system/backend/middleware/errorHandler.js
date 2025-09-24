import e from "express";

const handleError = (error, res, customMsg) => {
    console.error(error); // log real error for developers
    // Detect duplicate key errors (like email already exists)
    if (error.code === 11000) {
        return res.json({ success: false, message: "Duplicate entry. Please use a different value." });
    }
    // use custom message if provided, else generic
    res.json({ success: false, message: customMsg || "An unexpected error occurred. Please try again later." });
};

export default handleError;