import React, { useState } from 'react'
import "./Review.css";
import { addReview } from '../../actions/review';


const ReviewFrom = ({productId}) => {
  const [newReview, setNewReview] = useState({
    reviewer: "",
    stars: 0,
    about: ""
  });
  // console.log(productId);

  const handleSubmit = ()=>{
    console.log(`http://localhost:3012/api/review/${productId}`)
  addReview(`http://localhost:3012/api/review/${productId}`, newReview);
  setNewReview({
    reviewer: "",
    stars: 0,
    about: ""
  })
  }

const handleChange = (evt)=>{
  setNewReview((oldReview)=>({...oldReview,[evt.target.name]: evt.target.value}));
}

  return (
    <div className='review-form' >
        <div className='review-input-group'>
        <label htmlFor="reviwer">Reviewer:</label>
        <input type="text" name='reviewer' value={newReview.reviewer} onChange={(evt)=>handleChange(evt)} placeholder='add review'/>
        </div>
      <div className="review-input-group"><label htmlFor="stars">Rating:</label>
      <input type="number" name='stars' value={newReview.stars} min={1} max={5} onChange={(evt)=>handleChange(evt)} placeholder='Give rating in stars from 1 to 5'/></div>
      <div className="review-input-group review-msg-box"><label htmlFor="about">Review <br></br> Description:</label>
      <textarea type="text" name='about' value={newReview.about} onChange={(evt)=>handleChange(evt)} placeholder='write about product' rows={6}/>
      </div>
      <button type='button' className='review-submit-btn' onClick={handleSubmit}>Add Review</button>
    </div>
  )
}

export default ReviewFrom
