import React from "react";
import Carousels from "./Carousel";
import Footer from "./Footer";
import Partners from "./Partners";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>GATUNDIA CONCRETE LIMITED</h1>
      <Carousels />
      <div className="home">
        <p>
          Discover the strength beneath your projects with Gatundia Concrete,
          your trusted partner in quality concrete solutions. Nestled in the
          heart of Kenya, we take pride in being a leading producer of
          high-grade concrete products that lay the foundation for enduring
          structures.
        </p>
        <p>
          At Gatundia Concrete, we blend precision and expertise to deliver
          concrete that not only meets but exceeds industry standards. Whether
          you're embarking on a residential, commercial, or infrastructure
          project, our commitment to excellence ensures that your vision takes
          shape with strength and durability.
        </p>
        <p>
          Explore our range of premium concrete products, backed by a legacy of
          reliability and a promise of innovation. From concept to construction,
          Gatundia Concrete is your foundation for success. Build with
          confidence. Build with Gatundia Concrete.
        </p>
        {/* it will have a small about us  */}
        {/* <Partners /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
