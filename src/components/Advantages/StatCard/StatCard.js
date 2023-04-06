import React from "react";
import "./StatCard.scss";

const StatCard = ({ value, label }) => {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
};

export default StatCard;
