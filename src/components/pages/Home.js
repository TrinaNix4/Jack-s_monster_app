import "../../App.css";
import HeroSection from "../HeroSection";
import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XVENjm3Bjk0"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
