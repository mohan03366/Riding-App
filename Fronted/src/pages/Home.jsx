import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelClosRef = useRef(null);
  const vehicleFoundref = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          //opacity: 1,
        });
        gsap.to(panelClosRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          //opacity: 0,
        });
        gsap.to(panelClosRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundref.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundref.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="absolute w-auto h-16 mt-6 -ml-7"
        src="/LogoZ.png"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0  w-full ">
        <div className="h-[30%] relative p-6 bg-white">
          <h5
            ref={panelClosRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 right-6 text-2xl opacity-0 "
          >
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-base w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              type="text"
              className="bg-[#eee] px-12 py-2 text-lg rounded-base w-full mt-3"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0  bg-white ">
          <LocationSearchPanel
            //panelOpen={panelOpen}
            setPanelOpen={setPanelOpen}
            //vehiclePanelOpen={vehiclePanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="z-10 w-full fixed bottom-0 px-3 translate-y-full py-10 pt-12 bg-white"
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="z-10 w-full fixed bottom-0 px-3 translate-y-full py-6 pt-12 bg-white"
      >
        <ConfirmRide
          setVehicleFound={setVehicleFound}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
      <div
        ref={vehicleFoundref}
        className="z-10 w-full fixed bottom-0 px-3 translate-y-full py-6 pt-12 bg-white"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="z-10 w-full fixed bottom-0 px-3 py-6 pt-12 bg-white"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};
export default Home;
