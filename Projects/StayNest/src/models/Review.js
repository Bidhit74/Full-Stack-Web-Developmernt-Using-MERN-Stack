import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
    {
        comment: {
            type: String,
            required: true,
        },

        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
    },
    {
        timestamps: true, // createdAt & updatedAt
    },
);

const Review = model("Review", reviewSchema);

export default Review;
