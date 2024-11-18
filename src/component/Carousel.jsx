import React from 'react'
import Slider from "react-slick";

function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="img\Shape_5.png" alt="" />
        </div>
        <div>
          <img src="img\Path.png" alt="" />
        </div>
        <div>
          <img src="img\Shape_10.png" alt="" />
        </div>
        <div>
          <img src="img\Shape_5 (1).png" alt="" />
        </div>
        <div>
         <img src="img\Shape_10.png" alt="" />
        </div>
        <div>
          <img src="img\Shape_2.png" alt="" />
        </div>
        <div>
          <img src="img\Shape.png" alt="" />
        </div>
        <div>
          <img src="img\Shape_2.png" alt="" />
        </div>
      </Slider>
    </div>
    </>
  )
}

export default Carousel;