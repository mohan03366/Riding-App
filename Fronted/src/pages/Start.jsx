import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-center bg-cover bg-[url(https://img.freepik.com/free-photo/traffic-light_1150-18034.jpg?t=st=1734263818~exp=1734267418~hmac=699880c4fc9fa4ebd1fcc8423b80ce27d8ee474311bbabd94061eb3f5bfe970f&w=360)] h-screen pt-8  flex flex-col justify-between md:bg-[url(https://images.pexels.com/photos/10161200/pexels-photo-10161200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] md:bg-bottom w-full">
        <img
          className="w-auto h-15 -ml-14 -mt-5 "
          src="./public/LogoZ.png"
          alt="EasyGo"
        />

        <div className="bg-white pb-7 py-4 px-4 ">
          <h2 className="text-3xl font-bold">Get started with EasyGo </h2>

          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
