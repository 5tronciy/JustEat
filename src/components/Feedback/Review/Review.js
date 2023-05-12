import React from "react";
import Image from "../../common/Image";
import "./Review.scss";

const Review = ({ avatar, name, position, text }) => {
  return (
    <div className="review__content">
      <div className="review__person">
        <Image className="person__avatar" src={avatar} alt="" />
        <div className="person__description">
          <div className="person__name">{name}</div>
          <div className="person__position">{position}</div>
        </div>
      </div>
      <div className="review__text">{text}</div>
    </div>
  );
};

export default Review;
