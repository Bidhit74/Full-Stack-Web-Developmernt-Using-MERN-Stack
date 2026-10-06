import { cloudinary } from "../config/cloudConfig.js";
const uploadToCloudinary = (buffer, options = {}) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            options,
            (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            },
        );

        stream.end(buffer);
    });
};

export default uploadToCloudinary;
