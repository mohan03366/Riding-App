import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 absolute w-[93%] top-0 text-center"
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available !</h3>

      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://i.pinimg.com/736x/e3/ac/ee/e3acee0ffab4d039de2b424d7bf60665.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">delulu Debs</h2>
        </div>
        <h5 className="text-lg font-semibold">6.9 KM</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300 ">
            <i className="text-lg ri-map-pin-2-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">Marine Drive, MFP</p>
            </div>
          </div>
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
        <div className="flex w-full items-center justify-between">
          <button
            onClick={() => {
              props.setRidePopUpPanel(false);
            }}
            className=" mt-1 bg-gray-400 text-gray-900 font-semibold p-3 px-10 rounded-lg "
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopUpPanel(true);
            }}
            className=" mt-5 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
