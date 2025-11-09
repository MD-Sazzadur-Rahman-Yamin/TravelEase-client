import React, { Suspense } from "react";
import Hero from "../components/Hero";
import LatestVehicles from "../components/LatestVehicles";

const Home = () => {
    const LatestVehiclesPromise = fetch("http://localhost:3333/latest-vehicle").then(res=>res.json()); 
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
