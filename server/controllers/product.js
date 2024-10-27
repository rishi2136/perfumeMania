import Product from "../models/product.js";

// Get all Products
 const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a Product by ID
 const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("review");
         //populate the reference reviews
        if (!product) return res.status(404).json({ error: "Product not found" }); // in case product not found
        // console.log(product);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Delete a Product by ID
 const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export default {deleteProduct, getProductById, getAllProducts };