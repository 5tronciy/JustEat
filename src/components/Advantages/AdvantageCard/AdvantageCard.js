import React from "react";
import Image from "../../common/Image";
import "./AdvantageCard.scss";

const AdvantageCard = ({ icon, title, description }) => {
  return (
    <div className="advantage">
      <Image src={icon} alt="" className="advantage__icon" />
      <div className="advantage__title">{title}</div>
      <div className="advantage__description">{description}</div>
    </div>
  );
};

export default AdvantageCard;
