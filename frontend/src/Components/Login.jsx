import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [authUser, setAuthUser] = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.path || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(data);
        if (res) {
          toast.success("User Login Successful");
          setAuthUser({});
          navigate(from, { replace: true });
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        toast.error("Error Login", err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="min-w-full min-h-full flex justify-center bg-blue-50 dark:bg-slate-900 dark:text-white py-2 md:py-0">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-10 md:px-20 md:py-6 p-10 border-white border-2 backdrop-blur-xl bg-black/20 rounded-lg my-32 md:my-0 md:mt-36">
          <h1 className="text-4xl text-white-800">Login</h1>
          <form
            className="flex flex-col gap-4 w-full max-w-md text-black font-semibold"
            onSubmit={handleSubmit(onSubmit)}
          >
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
              Login
            </button>
          </form>
          <div className="flex gap-2">
            <p>New user</p>
            <a href="/signup" className="text-blue-500 underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
