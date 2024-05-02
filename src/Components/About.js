import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      {/* <div style={{padding: "2rem"}}>
        <img src="./assets/2024-05-01 (1).png" alt="company logo" className="mx-auto d-block" />
      </div> */}
      <div className="about">
      <p>
        Welcome to Gatundia Concrete Limited, your premier partner in
        construction solutions since 2021. Situated in the heart of Gatundia,
        Nyahururu, Kenya, we pride ourselves on delivering top-notch
        construction materials and services tailored to meet your project needs.
      </p>
      <p>
        At Gatundia Concrete Limited, we specialize in the production of
        ready-mix concrete, providing a reliable foundation for projects of all
        scales. Whether you're constructing a residential building, a commercial
        complex, or infrastructure projects like roads, our high-quality
        concrete ensures durability and strength. In addition to ready-mix
        concrete, we offer a comprehensive range of construction materials
        essential for your projects.
      </p>
      <p>
        From road-building materials to Kenha Markers for clear and safe traffic
        guidance, we have you covered. Our expertise extends to crafting durable
        fencing posts made of concrete, offering a long-lasting solution for
        your property needs.
      </p>
      <p>
        Backed by a team of skilled professionals and state-of-the-art
        facilities, we prioritize excellence in every aspect of our operations.
        We are committed to delivering superior products and services that
        exceed industry standards, ensuring your satisfaction and success with
        every project.
      </p>
      <p>
        At Gatundia Concrete Limited, we are more than just a supplier - we are
        your trusted partner in building a better future. Contact us today to
        discover how we can contribute to the success of your next construction
        endeavor.
      </p>
      </div>
      <Footer />
    </div>
  );
}

export default About
