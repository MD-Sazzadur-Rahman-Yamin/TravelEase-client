import React, { Suspense } from "react";
import Hero from "../components/Hero";
import LatestVehicles from "../components/LatestVehicles";
import useAxios from "../hooks/useAxios";
import AboutTravelEase from "../components/AboutTravelEase";
import FeaturedOwner from "../components/FeaturedOwner";

const Home = () => {
  const {axiosH} = useAxios();
  const LatestVehiclesPromise = axiosH.get("/latest-vehicle");
  return (
    <div>
      <Hero></Hero>
      <div className="max-w-7xl mx-auto">
        <Suspense
          to={
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <LatestVehicles
            LatestVehiclesPromise={LatestVehiclesPromise}
          ></LatestVehicles>
        </Suspense>
      </div>
      <FeaturedOwner></FeaturedOwner>
      <AboutTravelEase></AboutTravelEase>
    </div>
  );
};

export default Home;
