import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import multer from "multer";
import ExpressError from "../utils/ExpressError.js";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// Multer storage: keep uploaded file in memory temporarily
const storage = multer.memoryStorage();

const upload = multer({
    storage,
    // Bottom line: ✅ Good basic validation, ❌ not complete file-security validation by itself
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB
    },
    fileFilter: (req, file, cb) => {
        const allowedType = "image/jpeg";
        // includes() is mainly useful when you have multiple allowed types:
        if (allowedType === file.mimetype) {
            cb(null, true);
        } else {
            cb(new ExpressError(405, "Only JPG/JPEG images are allowed."));
        }
    },
});

export { cloudinary, upload };
