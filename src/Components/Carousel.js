import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousels() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };
  return (
    <div
      style={{ marginBottom: "2rem"}}
      className="carousels mx-auto d-block"
    >
      <Slider {...settings}>
        {introduction.map((item, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              <h1 className="products">{item.message}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const introduction = [
  {
    image: "/assets/pexels-quang-nguyen-vinh-222549-2138126.jpg",
    message: "GATUNDIA CONCRETE",
  },
  {
    image: "/assets/pexels-kawserhamid-176342.jpg",
    message: "Top services",
  },
  {
    image: "/assets/pexels-jimbear-1402923.jpg",
    message: "Gatundia",
  },
];

export default Carousels;
