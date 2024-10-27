import {Router} from "express";
import reviewController from "../controllers/review.js";
const router = Router()


// Route to create a new review
router.post('/:productId', reviewController.createReview);

// Route to delete a review by ID
router.delete('/:id', reviewController.deleteReview);


export default router;