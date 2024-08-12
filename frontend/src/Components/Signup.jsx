import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
  // console.log(document.body.classList);
  const [authUser, setAuthUser] = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(data);
        if (res.data) {
          // console.log("user created successfully");
          toast.success("Signup success");
          setAuthUser({});
          navigate(from, { replace: true });
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          toast.error("Signup failed");
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-w-full min-h-full flex justify-center dark:bg-slate-900 dark:text-white md:py-0 py-36">
        <div className="bg-black/20 flex flex-col items-center justify-center gap-2 md:gap-10 md:px-20 md:py-12 py-6 px-10 border-white border-2 backdrop-blur-xl dark:bg-black/20 rounded-lg md:mt-32">
          <h1 className="text-4xl text-white-800">Sign Up</h1>
          <form
            className="flex flex-col gap-4 w-full max-w-md text-black font-semibold"
            onSubmit={handleSubmit(onsubmit)}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-3xl border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-3xl border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-3xl border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              {...register("password", { required: true })}
            />
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-3xl bg-blue-500 text-white font-semibold"
            >
              Sign Up
            </button>
          </form>
          <div className="flex gap-2">
            <p>Already user</p>
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
