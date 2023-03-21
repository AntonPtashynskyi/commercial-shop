import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { newRequest } from "../../utils/newRequest";
import { upload } from "../../utils/upload";
import "./Register.scss";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const url = await upload(data.image[0]);
      const newUser = { ...data, image: url };
      console.log("user", newUser);
      const response = await newRequest.post("api/auth/register", {
        ...newUser,
      });
      console.log("response", response);
      navigate("/");
      reset();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="left">
          <h2>Create a new account</h2>
          <label htmlFor="">
            Username
            <input
              type="text"
              name="username"
              {...register("username", {
                required: "User name must be inputted",
              })}
            />
          </label>
          <label htmlFor="">
            Email
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                  message: "Email should be valid",
                },
              })}
            />
          </label>
          <label htmlFor="">
            Password
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Min length 8 symbols",
                },
              })}
            />
          </label>
          <label htmlFor="">
            Profile picture
            <input type="file" name="image" {...register("image")} />
          </label>
          <label htmlFor="">
            Country
            <input
              type="text"
              name="country"
              {...register("country", {
                required: "Country must be inputted",
              })}
            />
          </label>
          <button type="submit" className="registerButton">
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
        <div className="right">
          <h2>I want to become a seller</h2>
          <label htmlFor="" className="checkboxLabel">
            Activate the seller account
            <input type="checkbox" name="isSeller" {...register("isSeller")} />
          </label>
          <label htmlFor="">
            Phone number
            <input
              type="phone"
              name="phone"
              {...register("phone", {
                required: "Phone must be inputted",
              })}
            />
          </label>
          <label htmlFor="">
            Description
            <textarea rows={7} cols={3} {...register("description")}></textarea>
          </label>
        </div>
      </form>
    </div>
  );
};
