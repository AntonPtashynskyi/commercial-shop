import React from "react";
import { useQuery } from "@tanstack/react-query";
import { newRequest } from "../../utils/newRequest";
import "./Review.scss";

export const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`api/users/${review.userId}`).then((res) => res.data),
  });

  return (
    <>
      <div className="review">
        {isLoading ? (
          "loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="user">
            <img src={data.img || "/imgs/avatar.jpg"} alt="avatar" />
            <div className="info">
              <span>{data.username}</span>
              <div className="country">
                {" "}
                <span>{data.country}</span>
              </div>
            </div>
          </div>
        )}
        <div className="stars">
          {Array(review.star)
            .fill()
            .map((image, index) => (
              <img src="/imgs/star.svg" alt="" key={index} />
            ))}
          <span>{review.star}</span>
        </div>
        <p>{review.desc}</p>
        <div className="helpful">
          <span>Helpful?</span>
          <img src="/imgs/like.svg" alt="like" />
          <span>Yes</span>
          <img src="/imgs/dislike.svg" alt="dislike" />
          <span>No</span>
        </div>
      </div>
      <hr />
    </>
  );
};

// !TODO => review. Post review! fix error + add style for review field
