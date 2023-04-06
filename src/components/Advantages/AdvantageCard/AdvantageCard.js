import React from "react";
import "./AdvantageCard.scss";

const AdvantageCard = ({ icon, title, description }) => {
  return (
    <div className="advantage">
      <img src={icon} alt="" className="advantage__icon" />
      <div className="advantage__title">{title}</div>
      <div className="advantage__description">{description}</div>
    </div>
  );
};

export default AdvantageCard;
