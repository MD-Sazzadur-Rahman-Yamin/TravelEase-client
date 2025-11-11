import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import VehiclesCard from "../components/VehiclesCard";

const AllVehicle = () => {
  const navigation = useNavigation();
  const allVehicleData = useLoaderData();
  console.log(navigation)

  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-xl min-h-screen"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
        All Vehicles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 xl:mx-0">
        {allVehicleData.map((LatestVehicles) => (
          <VehiclesCard
            key={LatestVehicles._id}
            LatestVehicles={LatestVehicles}
          ></VehiclesCard>
        ))}
      </div>
    </div>
  );
};

export default AllVehicle;
