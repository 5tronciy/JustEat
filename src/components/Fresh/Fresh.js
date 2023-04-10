import React from "react";
import Button from "@mui/material-next/Button";
import "./Fresh.scss";
import image from "./assets/Group 4114.png";

const Fresh = () => {
  return (
    <div className="fresh">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="content__container">
          <div className="title">Fresh Vegetables Every Day</div>
          <div className="description">
            Healthy life as informed declared we enjoy the margaret. Joy
            horrible moreover man feelings own shy. Request norland neither
            mistake for yet. Between the for morning assured country believe.
          </div>
          <div className="button-wrapper">
            <Button color="primary" size="large" variant="filled">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fresh;
