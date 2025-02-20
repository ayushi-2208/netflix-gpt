import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-sm bg-transparent border border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-sm bg-transparent border border-white"
        />
        <button className="p-2 my-4 bg-red-600 w-full rounded-sm">
          Sign in
        </button>
        <p className="py-4">New to Netflix? Sign up now</p>
      </form>
    </div>
  );
};

export default Login;
