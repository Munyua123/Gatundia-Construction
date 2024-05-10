import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Service() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div
      style={{
        width: "70rem",
        border: "solid 2px",
        padding: "1rem",
        backgroundImage: `url(/assets/pexels-tobiasbjorkli-2058729.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="services mx-auto d-block"
    >
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="cards row">
            <img
              src={item.img}
              alt={item.name}
              width="300rem"
              className="mx-auto d-block"
            />
            <div className="card-body">
              <h5 className="card-title" style={{ textAlign: "center" }}>
                {item.name}
              </h5>
              <p className="card-text description" align="justify">
                {item.description}
              </p>
              <button className="btn btn-primary mx-auto d-block">
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    id: 1,
    name: "Ready Mix Concrete",
    img: "/assets/Asphalt Product1.jpg",
    description:
      "We specialize in the production and supply of high-quality ready mix concrete, meticulously crafted to meet the specific requirements of each construction project. Our ready mix concrete ensures optimal strength, durability, and consistency, providing a solid foundation for your structures.",
  },
  {
    id: 2,
    name: "Construction Materials",
    img: "/assets/Ballast1.jpg",
    description:
      "From aggregates to cement and beyond, we offer a diverse selection of construction materials sourced from trusted suppliers. Whether you're embarking on a small-scale renovation or a large-scale infrastructure project, we've got you covered with top-grade materials that meet industry standards.",
  },
  {
    id: 3,
    name: "Road Construction",
    img: "/assets/Dust.jpg",
    description:
      "With extensive experience in road construction, we excel in delivering reliable solutions for transportation infrastructure projects. Our expertise encompasses road paving, resurfacing, and rehabilitation, ensuring smooth and durable roadways that withstand the test of time.",
  },
  {
    id: 4,
    name: "Kenha Markers Installation",
    img: "/assets/road signals.jpg",
    description:
      "As authorized providers of Kenha markers, we offer professional installation services for road signs and markers compliant with Kenya National Highways Authority (KeNHA) standards. Our meticulous approach ensures clear and effective signage for enhanced road safety.",
  },
  {
    id: 5,
    name: "Concrete Fencing Posts",
    img: "/assets/fencing posts1.jpg",
    description:
      "For durable and long-lasting fencing solutions, look no further than our concrete fencing posts. Engineered for strength and resilience, our fencing posts provide a robust foundation for perimeter fencing, enhancing security and boundary demarcation.",
  },
];

export default Service;
