import React from "react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative w-full h-screen">
        <img
          src="/hero-image.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to TravelEase
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Your vehicle booking and trip management platform
          </p>
          <button
            onClick={() => navigate("/all-vehicles")}
            className="btn btn-primary-content btn-outline"
          >
            All Vehicles
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
