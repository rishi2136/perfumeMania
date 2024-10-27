import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const reviewSchema = new Schema({
    reviewer:{
        type: String,
        required: true
    },
    stars: {
        type: Number,
        default: 3
    },
    about: {
        type: String,
        required: true
    }
})

const Review =  model("Review", reviewSchema);

export default Review;