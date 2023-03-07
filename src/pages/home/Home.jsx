import React from "react";
import { Featured } from "../../components/featured/Featured";
import { Trusted } from "../../components/trustedBy/Trusted";
import { Slide } from "../../components/slide/Slide";
import { Features } from "../../components/features/Features";
import { Features_2 } from "../../components/features/Features_2";

import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Trusted />
      <Slide />
      <Features />
      <Features_2 />
      <Slide />
    </div>
  );
};
