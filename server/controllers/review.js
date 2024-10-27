import Review from "../models/review.js"
import Product from "../models/product.js"

// Create a new Review
 const createReview = async (req, res) => {
    try {
        const {productId} = req.params;
        const product = await Product.findById(productId);
        if(!product) return res.json({error: "product not exist"});
        const review = new Review(req.body);
        product.review.push(review);
        await review.save();
        await product.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Delete a Review by ID
 const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ error: "Review not found" });
        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export default {deleteReview, createReview};