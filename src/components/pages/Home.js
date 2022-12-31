import "../../App.css";
import HeroSection from "../HeroSection";
import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container>
        <HeroSection />
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XVENjm3Bjk0"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
}

export default Home;
