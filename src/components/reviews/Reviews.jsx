import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { Review } from "../review/Review";
import { newRequest } from "../../utils/newRequest";
import "./Reviews.scss";

export const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`api/reviews/${gigId}`).then((res) => res.data),
  });

  const { register, handleSubmit, reset } = useForm({ mode: "onChange" });

  const mutation = useMutation({
    mutationFn: (newReview) => {
      return newRequest.post("api/reviews", newReview);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({ ...data, gigId });
    reset();
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "Loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review.id} review={review} />)}
      <div className="addReview">
        <h3>Add new review</h3>
        {/* <p>{mutation.isError ? mutation.error.response.data : ""}</p> */}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="write your opinion"
            {...register("desc", { required: "Text should be inputted" })}
          />
          <select name="number" {...register("star")}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type="submit">{"Submit"}</button>
        </form>
      </div>
    </div>
  );
};
