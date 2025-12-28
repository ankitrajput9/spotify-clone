import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF, FaSpotify } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setToggle } from "../features/toggleSlice";
import { setUser } from "../features/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let LSD = JSON.parse(localStorage.getItem("reguser"))||[];

  const onSubmit = (data) => {
console.log(data)
 let log = LSD.find((val)=>val.email === data.email && val.password === data.password)

 if(!log){
console.log("Invalid Credentials")
return;
 }
 toast.success("Loged In")

 let loguser =localStorage.setItem("loguser",JSON.stringify(log))||[];
dispatch(setUser(loguser))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f3d2e] via-[#0b5d3b] to-[#0a7a47] relative overflow-hidden w-full">

      {/* FLOATING SPOTIFY ICONS */}
      <FaSpotify className="absolute top-20 left-20 text-green-500/30 text-8xl rotate-12" />
      <FaSpotify className="absolute bottom-24 right-24 text-green-500/20 text-9xl -rotate-12" />
      <FaSpotify className="absolute top-1/2 right-10 text-green-500/10 text-7xl" />

      {/* GLASS CARD */}
      <div className="relative z-10 w-full max-w-md rounded-2xl
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-[0_0_60px_rgba(0,0,0,0.5)]
        p-8 text-white">

        {/* HEADER */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaSpotify className="text-green-500 text-3xl" />
          <h2 className="text-2xl font-semibold">Log in to Spotify</h2>
        </div>

        {/* PHONE LOGIN */}
        <button className="w-full border border-white/30 rounded-full py-2 text-sm hover:bg-white/10 transition mb-6">
          Continue with Phone Number
        </button>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="text-xs text-gray-300">Email or Username</label>
            <input
              type="text"
              placeholder="Email or username"
              {...register("email", {
                required: "Email or username is required",
              })}
              className="w-full mt-1 px-4 py-2 rounded-md bg-black/30
              border border-white/20 outline-none focus:border-green-500"
            />
            {errors.email && (
              <p className="text-yellow-600 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-xs text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="w-full mt-1 px-4 py-2 rounded-md bg-black/30
              border border-white/20 outline-none focus:border-green-500"
            />
            {errors.password && (
              <p className="text-yellow-600 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* FORGOT */}
          <div className="text-right">
            <a href="#" className="text-xs text-gray-300 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-green-500 text-black font-semibold
            py-2 rounded-full hover:bg-green-400 transition"
          >
            Continue
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-xs text-gray-300">or sign up with</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* SOCIAL LOGIN */}
        <div className="flex justify-center gap-4">
          <button className="p-2 rounded-full border border-white/30 hover:bg-white/10">
            <FaGoogle />
          </button>
          <button className="p-2 rounded-full border border-white/30 hover:bg-white/10">
            <FaFacebookF />
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-300 mt-6">
          Don’t have an account?{" "}
          <span onClick={() => dispatch(setToggle(true))} className="underline cursor-pointer">
            Sign up for Spotify
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
