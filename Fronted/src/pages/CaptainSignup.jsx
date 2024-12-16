import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="py-5 px-5 flex flex-col h-screen justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s"
          alt=""
        />
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex flex-row justify-between">
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-[45%] text-base placeholder:text-base"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-[45%] text-base placeholder:text-base"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
              placeholder="Last name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-3">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button className="bg-[#111] font-semibold text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create my account
          </button>
        </form>
        <p className="text-center">
          Already have an account ?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px] leading-tight text-slate-500">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">google privacy policy</span> and{" "}
          <span className="underline">Terms of Services</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
