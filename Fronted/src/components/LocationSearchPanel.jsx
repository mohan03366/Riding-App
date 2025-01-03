import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);

  // sample array data
  const locations = [
    "23B, Neaar Reliance Digital, Diamond home stay, DRJLNG",
    "33D, Near Mall Road, Khushi home stay, DRJLNG",
    "34D, Near Motijheel, Mohini Beauty Parlour, MFP",
  ];

  return (
    <div>
      {/* this is just a sample data */}

      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center border-2 rounded-xl border-gray-150 active:border-black p-3 justify-start gap-4 my-2 "
          >
            <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
