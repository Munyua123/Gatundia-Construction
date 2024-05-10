import React from "react";
import Carousels from "./Carousel";
import Footer from "./Footer";
import Service from "./Services";

function Home() {
  return (
    <div>
      <Carousels />
      <div className="home">
        <p align="justify">
          Discover the strength beneath your projects with Gatundia Concrete,
          your trusted partner in quality concrete solutions. Nestled in the
          heart of Kenya, we take pride in being a leading producer of
          high-grade concrete products that lay the foundation for enduring
          structures.
        </p>
        <p align="justify">
          At Gatundia Concrete, we blend precision and expertise to deliver
          concrete that not only meets but exceeds industry standards. Whether
          you're embarking on a residential, commercial, or infrastructure
          project, our commitment to excellence ensures that your vision takes
          shape with strength and durability.
        </p>
        <p align="justify">
          Explore our range of premium concrete products, backed by a legacy of
          reliability and a promise of innovation. From concept to construction,
          Gatundia Concrete is your foundation for success. Build with
          confidence. Build with Gatundia Concrete.
        </p>
      </div>
      <h2 style={{ textAlign: "center" }}>About Us</h2>
      <div
        className="contacts"
        style={{ border: "solid 1px", padding: "2rem" }}
      >
        <img
          src="/assets/gatundia.png"
          className="img-thumbnail"
          alt="..."
          width="300rem"
        />
        <p
          className="abouthome"
          style={{marginTop: "1rem" }}
          align="justify"
        >
          Welcome to Gatundia Concrete Limited, your premier partner in
          construction solutions since 2021.we specialize in the production of
          ready-mix concrete, providing a reliable foundation for projects of
          all scales. Whether you're constructing a residential building, a
          commercial complex, or infrastructure projects like roads, our
          high-quality concrete ensures durability and strength.
        </p>
      </div>
      <h2 style={{ textAlign: "center" }}>Our Services</h2>
      <div className="services">
        <Service />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
