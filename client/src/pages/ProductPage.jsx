import { Link, useParams } from "react-router-dom";
import { getProductById, deleteProductById } from "../actions/product.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewFrom from "../components/Review/ReviewFrom.jsx";
import ReviewCard from "../components/Review/ReviewCard.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import ShareBtn from "../components/Share/ShareBtn.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isShare, setIsShare] = useState(false);
  const navigate = useNavigate();

  //fetch unique product
  useEffect(() => {
    getProductById(
      `https://perfumemania-backend.onrender.com/api/product/${id}`
    ).then((res) => {
      setProduct(res);
    });
  }, [product]);

  const handleDeleteClick = (id) => {
    deleteProductById(
      `https://perfumemania-backend.onrender.com/api/product/${id}`
    ).then((res) => console.log(res));
    navigate("/home");
  };

  return (
    <>
      {product !== null && (
        <div className="card-theatre-view">
          <div className="image-container">
            <img src={product.images[0]} alt="" />
          </div>

          <div className="product-card-detail">
            <h1 className="product-card-title">
              {product.name}{" "}
              <span className="card-delete-btn">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => handleDeleteClick(product._id)}
                ></i>
              </span>{" "}
            </h1>
            <div className="product-card-price">
              {" "}
              <span>$ &nbsp;{product.price}</span>
            </div>
            <div className="product-card-description">
              {product.description}
            </div>

            <h3>Available Sizes: </h3>
            <div className="size-options">
              {product.available_sizes.map((size, idx) => (
                <SizeBox size={size} key={idx} />
              ))}
            </div>

            <div className="rating-container">
              <span className="product-card-rating">
                5<i className="fa-solid fa-star star"> </i>Rating
              </span>
              <div className="card-share-btn" onClick={() => setIsShare(true)}>
                <i className="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </div>
        </div>
      )}
      <h1 className="pre-review-heading">Gallery</h1>
      <hr className="pre-review-heading" />
      {product !== null && <Gallery images={product.images} />}

      <h1 className="pre-review-heading">Add Review</h1>
      <hr className="pre-review-heading" />
      {product !== null && <ReviewFrom productId={product._id} />}
      {product !== null && (
        <div className="review-container">
          {product.review.length > 0 &&
            product.review.map((el, idx) => (
              <ReviewCard uniqueReview={el} key={idx} />
            ))}
        </div>
      )}
      {isShare && <ShareBtn setIsShare={setIsShare} />}
    </>
  );
};

const SizeBox = ({ size }) => <div className="size-box">{size}</div>;
export default ProductPage;
