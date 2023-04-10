import React from "react";
import "./Chef.scss";
import image from "./assets/Image & bg elements.png";
import check from "./assets/check mark.svg";

const Chef = () => {
  return (
    <div className="chef">
      <div className="content">
        <div className="content__container">
          <div className="title">Cooked by the Best Chefs</div>
          <div className="description">
            Believing neglected so so allowance existence departure in. In
            design active temper be uneasy. Thirty for remove plenty regard you
            summer though. He preference connection astonished on of ye.
          </div>
          <ul>
            <li>
              <div className="list__item">
                <img src={check} alt="" />A guaranteed delicious meal
              </div>
            </li>
            <li>
              <div className="list__item">
                <img src={check} alt="" />
                Food is guaranteed hygienic
              </div>
            </li>
            <li>
              <div className="list__item">
                <img src={check} alt="" />
                Cooked quickly
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Chef;
