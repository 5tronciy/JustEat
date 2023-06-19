import React from "react";
import Button from "@mui/material-next/Button";
import DishCard from "./DishCard/DishCard";
import "./Offer.scss";
import greenSalad from "./assets/green-salad.png";
import beefSalad from "./assets/beef-salad.png";
import nutSalad from "./assets/nut-salad.png";

const offers = [
  {
    id: "dish1",
    image: greenSalad,
    name: "Green Salad",
    description:
      "A salad combined witha delicious cut of bacon and mixed with tasty and fresh sesome oil.",
  },
  {
    id: "dish2",
    image: beefSalad,
    name: "Beef Salad",
    description:
      "A salad combined witha delicious cut of bacon and mixed with tasty and fresh sesome oil.",
  },
  {
    id: "dish3",
    image: nutSalad,
    name: "Nut Salad",
    description:
      "A salad combined witha delicious cut of bacon and mixed with tasty and fresh sesome oil.",
  },
];

const Offer = () => {
  return (
    <div className="offer__wrapper" role="complementary" aria-labelledby="offer-title">
      <div className="offer__content">
        <div id="offer-title" className="offer__title">Special Dishes for you</div>
        <div className="offer__description">
          Made with premium & 100% Organic ingredients
        </div>
        <div className="offer__container">
          {offers.map((item) => (
            <DishCard
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
        <div className="button-wrapper">
          <Button color="primary" size="large" variant="filled">
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
