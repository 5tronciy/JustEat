import React from "react";
import order from "./assets/order.svg";
import location from "./assets/location.svg";
import leaf from "./assets/leaf.svg";
import AdvantageCard from "./AdvantageCard/AdvantageCard";
import StatCard from "./StatCard/StatCard";
import "./Advantages.scss";

const advantages = [
  {
    id: "1",
    icon: order,
    title: "Easy to order",
    description: "foods include fresh produce, meats as well as processed",
  },
  {
    id: "2",
    icon: location,
    title: "Live Order",
    description: "Place your online Order easily and get the food instantly",
  },
  {
    id: "3",
    icon: leaf,
    title: "100% Organic",
    description: "Organic food is grown without the use of synthetic chemicals",
  },
];

const stats = [
  { id: "01", value: "40+", label: "Food Partners" },
  { id: "02", value: "1450+", label: "Trusted Clients" },
  { id: "03", value: "12k+", label: "Order Online" },
];

const Advantages = () => {
  return (
    <div className="advantages__wrapper">
      <div className="advantages__content">
        <div className="title">Why Choose US?</div>
        <div className="description">
          Organic food is grown without the use of synthetic chemicals
        </div>
        <div className="advantages">
          {advantages.map((item) => (
            <AdvantageCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="statistics">
          {stats.map((stat) => (
            <StatCard key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
