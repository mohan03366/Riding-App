import React from "react";

const LocationSearchPanel = () => {
  return (
    <div>
      {/* this is just a sample data */}

      <div className="flex items-center justify-start gap-4 my-4 ">
        <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
          <i class="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">Mohini beauty parlour, MFP</h4>
      </div>
      <div className="flex items-center justify-start gap-4 my-4 ">
        <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
          <i class="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">Diamond home stay, DRJLNG </h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
