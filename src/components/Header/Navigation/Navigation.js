import React from "react";
import Button from "@mui/material-next/Button";
import "./Navigation.scss";
import Logo from "../../../assets/logo.svg";
import SearchIcon from "./assets/SEARCH.svg";
import CartIcon from "./assets/shopping-cart.svg";

const Navitagion = () => {
  return (
    <nav role="navigation" className="navigation__wrapper">
      <div className="navigation">
        <div className="logo">
          <img src={Logo} alt="JustEat" />
        </div>
        <div className="menu">
          <div className="menu__item">Home</div>
          <div className="menu__item">About</div>
          <div className="menu__item">Contact</div>
          <div className="menu__item">Testimonials</div>
        </div>
        <div className="right-side">
          <div className="icons">
            <div className="icons__item">
              <img src={SearchIcon} alt="Search" />
            </div>
            <div className="icons__item">
              <img src={CartIcon} alt="Cart" />
            </div>
          </div>
          <div className="button-wrapper">
            <Button color="secondary" size="large" variant="filled">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navitagion;
