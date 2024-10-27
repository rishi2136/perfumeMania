import {Router} from "express";
import productController from "../controllers/product.js"
const router = Router()


// To get or fetch all products
router.get('/', productController.getAllProducts);

// To get a single product by ID
router.get('/:id', productController.getProductById);

// To delete a product by ID
router.delete('/:id', productController.deleteProduct);



export default router;