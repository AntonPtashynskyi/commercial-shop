import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { CatCard } from "../catCard/CatCard";
import { Arrow } from "./Arrow";

import "./Slide.scss";
import { cards } from "../../data";

export const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Carousel
          show={3}
          leftArrow={<Arrow direction="left" />}
          rightArrow={<Arrow direction="right" />}
          className="slider"
        >
          {cards?.map((item) => (
            <CatCard item={item} key={item.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
