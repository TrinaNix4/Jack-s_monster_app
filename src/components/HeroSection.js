import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import background from "./background.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Horror awaits...</h1>
      <p>Are you scared? </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Play Game <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
