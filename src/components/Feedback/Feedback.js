import React from "react";
import Slider from "react-slick";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Review from "./Review/Review";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import "./Feedback.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: "review1",
    avatar: avatar1,
    name: "KHALIL NAZIR",
    position: "CEO of Oshoo",
    review:
      "Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.",
  },
  {
    id: "review2",
    avatar: avatar2,
    name: "ZEESHAN ANWER",
    position: "Lead of JustEat",
    review:
      "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    id: "review3",
    avatar: avatar1,
    name: "MAKHMUD AZAMAT",
    position: "CEO of OpenAI",
    review:
      "Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.",
  },
];

const Feedback = () => {
  const { _, width } = useWindowDimensions();

  return (
    <div className="feedback__wrapper">
      <div className="feedback__content">
        <div className="feedback__title">Happy Clients Says</div>
        <div className="feedback__carousel">
          <Slider
            dots={true}
            infinite={false}
            slidesToShow={width > 767 ? 2 : 1}
            slidesToScroll={1}
          >
            {testimonials.map((item) => (
              <Review
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                position={item.position}
                text={item.review}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
