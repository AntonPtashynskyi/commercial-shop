import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { newRequest } from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      const res = await newRequest.post("/api/auth/login", data);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
      setError(null);
      reset();
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign in</h1>
        <label>
          email
          <input
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                message: "Email should be valid",
              },
            })}
            id="email"
            type="email "
            placeholder="your@mail.com"
          />
          <div className="error">
            {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
          </div>
        </label>
        <label>
          password
          <input
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 6,
                message: "Min length 8 symbols",
              },
            })}
            placeholder="********"
            type="password"
          />
          <div className="error">
            {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
          </div>
        </label>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
        {error && <div>{error || "Ups Some error occurs!"}</div>}
      </form>
    </div>
  );
};
