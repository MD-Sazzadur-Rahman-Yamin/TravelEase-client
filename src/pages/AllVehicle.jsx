import React from 'react';
import { useLoaderData } from 'react-router';
import VehiclesCard from '../components/VehiclesCard';

const AllVehicle = () => {
    const allVehicleData = useLoaderData();
    console.log(allVehicleData)
    return (
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
          Latest Vehicles
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