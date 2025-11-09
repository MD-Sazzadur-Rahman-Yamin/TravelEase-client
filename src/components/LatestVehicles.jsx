import React, { use } from 'react';
import VehiclesCard from './VehiclesCard';
import { Link } from 'react-router';

const LatestVehicles = ({ LatestVehiclesPromise }) => {
    const LatestVehiclesData = use(LatestVehiclesPromise);
  return (
    <div>
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
      <div className='flex justify-center p-8'>
        <Link className="btn btn-primary btn-outline" to="/all-vehicles">
          All Vehicles
        </Link>
      </div>
    </div>
  );
};

export default LatestVehicles;