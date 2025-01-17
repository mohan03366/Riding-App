import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="p-1 absolute w-[93%] top-0 text-center"
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVechicle("car");
        }}
        className="flex w-full active:border-black items-center justify-between mb-2 p-3 border-2  rounded-xl "
      >
        <img
          className="h-16"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            EasyGo &nbsp;
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">7 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold"> ₹{props.fare.car}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVechicle("moto");
        }}
        className="flex w-full active:border-black items-center justify-between mb-2 p-3 border-2 rounded-xl "
      >
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            EasyMoto &nbsp;
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold"> ₹{props.fare.moto}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVechicle("auto");
        }}
        className="flex w-full active:border-black items-center justify-between mb-2 p-3 border-2  rounded-xl "
      >
        <img
          className="h-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxz2FlgviqkK668ntRBEGqv3MFN0bwruGaF2u9UdY6invFXTdHdB65J5HnAFB98h7VCY&usqp=CAU"
          alt=""
        />
        <div className=" ml-5 w-1/2">
          <h4 className="font-medium text-base">
            EasyAuto &nbsp;
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold"> ₹{props.fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
