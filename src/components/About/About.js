import React from "react";
import Button from "@mui/material-next/Button";
import Image from "../common/Image";
import "./About.scss";
import image1 from "./assets/Image 01.png";
import image2 from "./assets/Image 02.png";
import image3 from "./assets/Image 03.png";

const About = () => {
  return (
    <div className="about" role="complementary" aria-labelledby="about-title">
      <div className="content">
        <div className="content__container">
          <div id="about-title" className="title">About US</div>
          <div className="description">
            Organic food is grown without the use of synthetic chemicals, such
            as human-made pesticides and fertilizers, and does not contain
            genetically modified organisms (GMOs). Organic foods include fresh
            produce, meats, and dairy products as well as processed foods such
            as crackers, drinks, and frozen meals.
          </div>
          <div className="button-wrapper">
            <Button color="primary" size="large" variant="filled">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="images">
        <div className="column">
          <Image className="images__item" src={image1} alt="" />
          <Image className="images__item" src={image2} alt="" />
        </div>
        <Image className="images__item--shifted" src={image3} alt="" />
      </div>
    </div>
  );
};

export default About;
