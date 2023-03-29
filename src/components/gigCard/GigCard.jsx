import React from "react";
import { useQuery } from "@tanstack/react-query";
import { newRequest } from "../../utils/newRequest";
import { Link } from "react-router-dom";
import "./GigCard.scss";

export const GigCard = ({ item }) => {
  const { price, desc, title, cover, userId, starNumber, totalStars } = item;

  const { isLoading, error, data } = useQuery({
    queryKey: ["gigUser"],
    queryFn: () =>
      newRequest.get(`api/users/${userId}`).then((res) => res.data),
  });
  return (
    <Link to={`/gig/${item?._id}`} className="link">
      <div className="gigCard">
        <img src={cover} alt="" />
        <div className="info">
          {isLoading ? (
            "Loading"
          ) : error ? (
            "Something went wrong"
          ) : (
            <div className="user">
              <img
                src={
                  data.image || "https://www.w3schools.com/howto/img_avatar.png"
                }
                alt=""
                className="avatar"
              />
              <span>{data.username}</span>
            </div>
          )}
          <h4>{title}</h4>
          <p className="description">{desc}</p>
          <div className="star">
            <img src="/imgs/star.svg" alt="star" />
            <span>
              {!isNaN(totalStars / starNumber) &&
                Math.round(totalStars / starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="/imgs/heart.svg" alt="heart" />
          <div className="price">
            <span>Starting at</span>
            <h2>{price}$</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};
