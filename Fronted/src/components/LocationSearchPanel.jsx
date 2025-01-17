import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanelOpen,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.description); // Extract the `description` property
    } else if (activeField === "destination") {
      setDestination(suggestion.description); // Extract the `description` property
    }
    // Uncomment if needed
    //setVehiclePanelOpen(true);
    //setPanelOpen(false);
  };

  return (
    <div>
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex items-center border-2 rounded-xl border-gray-150 active:border-black p-3 justify-start gap-4 my-2 "
        >
          <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          {/* Extract a string property like description or format the object */}
          <h4 className="font-medium">
            {typeof elem === "object" ? elem.description : elem}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
