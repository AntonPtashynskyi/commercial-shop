import React from "react";
import "./Features.scss";

export const Features_2 = () => {
  return (
    <div className="features features_2">
      <div className="container">
        <div className="left">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium minus itaque officiis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            iste recusandae, doloribus atque inventore minus praesentium cumque
            ullam eligendi rerum!
          </p>
          <ul>
            <li>
              <img src="./imgs/check_light.svg" alt="" />
              Lorem ipsum dolor sit amet.
            </li>
            <li>
              <img src="./imgs/check_light.svg" alt="" />
              Lorem ipsum dolor sit amet.
            </li>
            <li>
              <img src="./imgs/check_light.svg" alt="" />
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
          <button>Explore more Business</button>
        </div>
        <div className="right">
          <img src="./imgs/mesgs.png" alt="" />
        </div>
      </div>
    </div>
  );
};
