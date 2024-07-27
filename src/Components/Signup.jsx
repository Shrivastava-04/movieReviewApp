import React from "react";

const Signup = () => {
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center">
      <div className="min-h-fit min-w-fit bg-slate-800 flex flex-col items-center justify-center gap-10 p-20 border-white border-2 backdrop-blur-xl bg-black/20 rounded-lg">
        <h1 className="text-4xl text-white-800">Sign Up</h1>
        <form className="flex flex-col gap-4 w-full max-w-md text-black font-semibold">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-3xl border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required={true}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-3xl border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required={true}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-3xl border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required={true}
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
  );
};

export default Signup;
