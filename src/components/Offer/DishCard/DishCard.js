import React from "react";
import Image from "../../common/Image";
import "./DishCard.scss";

const DishCard = ({ image, name, description }) => {
  return (
    <div className="dish">
      <Image src={image} alt="" className="dish__image" />
      <div className="dish__name">{name}</div>
      <div className="dish__description">{description}</div>
    </div>
  );
};

export default DishCard;
