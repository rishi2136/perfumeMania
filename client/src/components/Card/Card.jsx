
import React, { useState } from "react";
import "./Card.css"
import {deleteProductById} from "../../actions/product.js";
import { useNavigate } from "react-router-dom";

const Card = ({product}) => {
  const navigate = useNavigate();

  const productRedirect = (id)=>
      navigate(`/product/${id}`)
  

const handleDeleteClick = ( evt, id)=>{
  evt.preventDefault();
  evt.stopPropagation();
    deleteProductById(
      `https://perfumemania-backend.onrender.com/api/product/${id}`
    ).then((res) => {
      navigate("/home");
    });
  };



  return (
      <div onClick={()=>productRedirect(product._id)} className="product-card">
      <img src={product.images[0]} className="product-image" alt="" />
      <div className="product-title">{product.name} <span className="card-delete-btn"><i className="fa-solid fa-trash" onClick={(evt)=>handleDeleteClick(evt, product._id)}></i></span></div>
      <div>
        <span className="rating">{product.review.reviewer}</span>
        <span className="price">$ {product.price}</span>
      </div>
      <div className="product-descrip">{product.description.slice(0,200) + "..."}</div>
      </div>
  )
}

export default Card;
