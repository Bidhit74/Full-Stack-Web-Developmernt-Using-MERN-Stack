import { Schema, model } from "mongoose";
import Review from "./Review.js";

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxLength: 500,
    },
    imageUrl: {
        type: String,
        default: "https://img.icons8.com/plasticine/1200/no-image.jpg",
        set: (v) =>
            v === ""
                ? "https://img.icons8.com/plasticine/1200/no-image.jpg"
                : v,
    },
    price: {
        type: Number,
        min: 1,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

// Post middleware: Runs after a listing is deleted.
// Deletes all reviews that belong to the deleted listing.
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({
            _id: { $in: listing.reviews },
        });
    }
});

const Listing = model("Listing", listingSchema);

export default Listing;
