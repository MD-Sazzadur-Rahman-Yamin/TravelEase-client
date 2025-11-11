import React, { Suspense } from "react";
import Hero from "../components/Hero";
import LatestVehicles from "../components/LatestVehicles";
import useAxios from "../hooks/useAxios";

const Home = () => {
  const axiosH = useAxios();
  const LatestVehiclesPromise = axiosH.get("/latest-vehicle");
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
