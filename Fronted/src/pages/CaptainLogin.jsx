import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="p-7 flex flex-col h-screen justify-between">
        <div>
          <img
            className="w-16 mb-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s"
            alt=""
          />
          <form
            action=""
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              placeholder="email@example.com"
            />
            <h3 className="text-lg font-medium mb-2">Enter password</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <button className="bg-[#111] font-semibold text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center">
            New here ?{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a captain
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-[#d5622d] flex items-center justify-center font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Log in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
