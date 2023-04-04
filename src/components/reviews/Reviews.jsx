import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Review } from "../review/Review";
import { newRequest } from "../../utils/newRequest";
import "./Reviews.scss";

export const Reviews = ({ gigId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`api/reviews/${gigId}`).then((res) => res.data),
  });

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "Loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review.id} review={review} />)}
    </div>
  );
};
