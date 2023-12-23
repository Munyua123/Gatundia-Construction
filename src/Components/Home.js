import React from "react";
import Carousels from "./Carousel";
import Footer from "./Footer";
import { Route,Routes } from "react-router-dom";
import Contact from "./Contact";


function Home() {
    return(
        <>
        <h1>Gatundia Concrete Limited</h1>

        <Carousels />
        <Routes>
            <Route path="/contacts" element={<Contact/>} />
        </Routes>
        <Contact />
        {/* it will have a small about us  */}
        <Footer />
        </>
    )
}

export default Home