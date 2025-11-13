import React, { use } from "react";
import VehiclesCard from "./VehiclesCard";
import { Link } from "react-router";
import { motion } from "motion/react";


const LatestVehicles = ({ LatestVehiclesPromise }) => {
  const LatestVehiclesResponce = use(LatestVehiclesPromise);
  const LatestVehiclesData = LatestVehiclesResponce.data;
  return (
    <div>
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
        Latest Vehicles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 xl:mx-0">
        {LatestVehiclesData.map((Vehicle) => (
          <VehiclesCard key={Vehicle._id} Vehicle={Vehicle}></VehiclesCard>
        ))}
      </div>
      <div className="flex justify-center p-8">
        <Link to="/all-vehicles">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="btn btn-primary btn-outline"
          >
            All Vehicles
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default LatestVehicles;
