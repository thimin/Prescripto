// backend/middleware/multer.js
import multer from "multer";
import path from "path";
import crypto from "crypto";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination: (_, __, cb) => cb(null, uploadDir),
    filename: (_, file, cb) => {
        const ext = path.extname(file.originalname || "");
        cb(null, `${Date.now()}-${crypto.randomUUID()}${ext}`);
    }
});

// allow only images (tune to your needs)
const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
const fileFilter = (_req, file, cb) => {
    // reject empty field names (a common crash vector) and unknown mimes
    if (!file.fieldname || !allowed.has(file.mimetype)) {
        return cb(new Error("Invalid file upload"), false);
    }
    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024,   // 2MB
        files: 1,
        fields: 10,
        parts: 20
    }
});

export default upload;
