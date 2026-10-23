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
    image: {
        url: {
            type: String,
            required: true,
        },
        public_id: {
            type: String,
            required: true,
        },
        fileName: {
            type: String,
            required: true,
        },
    },
    price: {
        type: Number,
        min: 1,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
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
    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    category: {
        type: String,
        enum: [
            Nature,
            Cabins,
            Cottages,
            Mountain,
            Lakefront,
            Lakeside,
            Valley,
            Himalayan,
            Houseboat,
            Luxury,
            Others,
        ],
        required: true,
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
