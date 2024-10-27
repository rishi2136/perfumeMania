import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available_sizes: {
        type: [String],
        enum: ["125ml", "250ml", "400ml", "750ml"],
        default: ["125ml", "250ml"]
    },
    quantity:  {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    review: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    images: {
        type: [String],
        required: true,
        default: ["https://img.freepik.com/free-vector/perfume-spray-bottle-mock-up-banner_33099-2075.jpg?t=st=1730041480~exp=1730045080~hmac=0b797eed452e579d332a0c63fba8c9ebd22fe31753a93570c820498ed65ab5fd&w=1380"]
    }
})


const Product = model("Product", productSchema);

export default Product;

