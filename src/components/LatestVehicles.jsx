import React, { use } from 'react';
import VehiclesCard from './VehiclesCard';

const LatestVehicles = ({ LatestVehiclesPromise }) => {
    const LatestVehiclesData = use(LatestVehiclesPromise);
  return (
    <div className="w-full">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
        Latest Vehicles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 xl:mx-0">
        {LatestVehiclesData.map((LatestVehicles) => (
          <VehiclesCard
            key={LatestVehicles._id}
            LatestVehicles={LatestVehicles}
          ></VehiclesCard>
        ))}
      </div>
    </div>
  );
};

export default LatestVehicles;