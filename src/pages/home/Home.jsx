import React from "react";
import { Featured } from "../../components/featured/Featured";
import { Trusted } from "../../components/trustedBy/Trusted";
import { Slide } from "../../components/slide/Slide";

export const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Trusted />
      <Slide />
    </div>
  );
};
