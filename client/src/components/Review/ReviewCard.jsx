import React from 'react'
import "./Review.css";

// import { deleteReview } from '../../actions/review';
const ReviewCard = ({uniqueReview}) => {


  return (
    <>
    <form className='review-card'>  
      <h2 className='reviewer'>{uniqueReview.reviewer}</h2>
      <div className='reviewer-rating'>
        <span>{uniqueReview.stars} <i className="fa-solid fa-star star"> </i> stars</span>
      </div>
      <div className='product-review'>{uniqueReview.about}</div>
    </form>
    </>
  )
}

export default ReviewCard
