import React from "react";
import { useForm } from "react-hook-form";
import "./Register.scss";

export const Register = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
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
            Register
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
