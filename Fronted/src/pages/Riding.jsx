import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Drake</h2>
            <h4 className="text-xl font-semibold  -mt-1 -mb-1">
              RJ69-PDF-0069
            </h4>
            <p className="text-sm text-gray-600">Swift Dzire</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center gap-2">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300  ">
              <i className="ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm text-gray-600 -mt-1">Marine Drive, MFP</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 ">
              <i className="ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹ 193.20</h3>
                <p className="text-sm text-gray-600 -mt-1">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg ">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
