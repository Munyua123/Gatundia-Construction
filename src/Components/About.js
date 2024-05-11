import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <div className="about">
        <p>
          Welcome to Gatundia Concrete Limited, your premier partner in
          construction solutions since 2021. Situated in the heart of Gatundia,
          Nyahururu, Kenya, we pride ourselves on delivering top-notch
          construction materials and services tailored to meet your project
          needs. At Gatundia Concrete Limited, we specialize in the production
          of ready-mix concrete, providing a reliable foundation for projects of
          all scales. Whether you're constructing a residential building, a
          commercial complex, or infrastructure projects like roads, our
          high-quality concrete ensures durability and strength. In addition to
          ready-mix concrete, we offer a comprehensive range of construction
          materials essential for your projects.
        </p>
        <p>
          But our offerings extend far beyond concrete alone. From essential
          road-building materials to the trusted markers of Kenya National
          Highways Authority (Kenha) for safe and seamless traffic navigation,
          consider Gatundia Concrete Limited your comprehensive construction
          companion. Moreover, our mastery extends to crafting robust fencing
          posts from concrete, providing enduring solutions for all your
          property enclosure needs.
        </p>
        <div className="contacts">
          <img
            src="/assets/pexels-pixabay-33266.jpg"
            alt="construction team"
            style={{ marginBottom: "2rem" }}
            width="300rem"
          />
          <p className="abouthome">
            Backed by a team of skilled professionals and state-of-the-art
            facilities, we prioritize excellence in every aspect of our
            operations. We are committed to delivering superior products and
            services that exceed industry standards, ensuring your satisfaction
            and success with every project.
          </p>
        </div>
        <p>
          At Gatundia Concrete Limited, we transcend the role of mere suppliers
          we are steadfast allies in your journey towards a brighter future.
          Reach out to us today and embark on a collaborative voyage towards the
          realization of your construction aspirations. Let's build together and
          pave the way for a better tomorrow.
        </p>
        <div>
          <h2>Our Leadership</h2>
          <div>
            <figure className="text-center">
              <img
                src="https://www.nyonjoroeastafrica.com/images/team/1.png"
                className="rounded"
                alt="..."
              />
              <figcaption>Founder & CEO</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
