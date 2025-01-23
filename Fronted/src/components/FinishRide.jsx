import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import axios from "axios";

const FinishRide = (props) => {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);

  async function endRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/ride/end-ride`,
      {
        rideId: props.ride._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      navigate("/captain-home");
    }
  }

  return (
    <div>
      <h5
        className="p-1 absolute w-[93%] top-0 text-center"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish This Ride</h3>

      <div className="flex items-center justify-between mt-4 p-4 border-2 border-yellow-400 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://i.pinimg.com/736x/e3/ac/ee/e3acee0ffab4d039de2b424d7bf60665.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">
            {props.ride?.user.fullname.firstname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">6.9 KM</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300 ">
            <i className="text-lg ri-map-pin-2-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300  ">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹ {props.ride?.fair}</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <button
            onClick={endRide}
            className="w-full mt-5 flex justify-center text-lg bg-green-600 text-white font-semibold p-3 rounded-lg "
          >
            Finish Ride
          </button>
          <p className="mt-10 text-xs">
            Click on finish ride button if you got the payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
