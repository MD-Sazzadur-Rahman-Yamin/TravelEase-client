import React from "react";
import { Link } from "react-router";

const AboutTravelEase = () => {
  return (
    <section className="bg-base-100 text-base-content pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
          About TravelEase
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          <span className="font-semibold">TravelEase</span> is your all-in-one
          vehicle booking and trip management platform designed to make travel
          simpler, faster, and more reliable. Whether you’re planning a weekend
          getaway or managing daily rides, TravelEase connects users with
          trusted vehicle owners for smooth, transparent, and hassle-free
          booking experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/all-vehicles">
            <button className="btn btn-primary btn-outline">
              Explore Vehicles
            </button>
          </Link>
          <Link to="/add-vehicle">
            <button className="btn btn-primary btn-outline">
              Add Your Vehicle
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTravelEase;
