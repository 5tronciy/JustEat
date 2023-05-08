import React from "react";
import "./DishCard.scss";

const DishCard = ({ image, name, description }) => {
  return (
    <div className="dish">
      <img src={image} alt="" className="dish__image" />
      <div className="dish__name">{name}</div>
      <div className="dish__description">{description}</div>
    </div>
  );
};

export default DishCard;
