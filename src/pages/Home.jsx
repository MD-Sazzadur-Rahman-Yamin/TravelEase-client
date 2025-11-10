import React, { Suspense } from "react";
import Hero from "../components/Hero";
import LatestVehicles from "../components/LatestVehicles";
import axios from "axios";

const Home = () => {
  const LatestVehiclesPromise = axios.get(
    "http://localhost:3333/latest-vehicle"
  );
  return (
    <div>
      <Hero></Hero>
      <div className="max-w-7xl mx-auto">
        <Suspense
          to={<span className="loading loading-spinner loading-xl"></span>}
        >
          <LatestVehicles
            LatestVehiclesPromise={LatestVehiclesPromise}
          ></LatestVehicles>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
