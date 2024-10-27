import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom"
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"


import "./Banner.css"


//styling of 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow`}
      style={{ ...style, display: "block", position: "absolute",top: "300px",right:0 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow`}
      style={{ ...style, display: "block", position: "absolute", left:0 ,top: "300px"   }}
      onClick={onClick}
    />
  );
}


export default function Banner() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true ,
    autoplay:true,
    pauseOnHover:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      appendDots: dots => (
      <div
        style={{
          padding: "20px 0",
          boxSizing: "content-box",
        }}
      >
        <ul style={{ margin: "10px" }}> {dots} </ul>
      </div>
    ),
  };


 
  return (
    <Slider {...settings}>
      <div>
       <Link to={`/home`}>
       <img className="banner-img" src={banner1}/>
       </Link>
        
      </div>
      <div>
       <Link to={`/home`}>
       <img className="banner-img" src={banner2} />
       </Link>
        
      </div>
      <div>
       <Link to={`/home`}>
       <img className="banner-img" src={banner3}/>
       </Link>
        
      </div>
      <div>
       <Link to={`/home`}>
       <img className="banner-img" src={banner4}/>
       </Link>
        
      </div>
    </Slider>
  );
}