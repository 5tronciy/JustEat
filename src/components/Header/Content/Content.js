import React from "react";
import Button from "@mui/material-next/Button";
import "./Content.scss";

const Content = () => {
  return (
    <div className="content__wrapper">
      <div className="content__block">
        <div className="title">
          <div className="title__row">
            Just <span className="title__row--primary-color">Eat healthy</span>
          </div>
          <div className="title__row">food to live a</div>
          <div className="title__row">healthier life</div>
        </div>
        <div className="description">
          Enjoy a healthy life by eating healthy foods<br></br>that have
          extraordinary flavors that make your life healthier for today and in
          the future
        </div>
        <div className="button-wrapper">
          <Button color="primary" size="large" variant="filled">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
