import React from "react";

const Image = ({ src, type = "image/avif", ...delegated }) => (
  <picture>
    <source srcSet={src.split(".")[0] + ".avif"} type={type} />
    <img src={src} {...delegated} />
  </picture>
);

export default Image;
