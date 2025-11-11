import { useLoaderData } from 'react-router';
import React from "react";

const VehicleDetail = () => {
  const vehicleData = useLoaderData();

  const {
    vehicleName,
    owner,
    category,
    pricePerDay,
    location,
    availability,
    description,
    coverImage,
    userEmail,
    createdAt,
    categories,
  } = vehicleData;

  return (
    <div className="max-w-6xl mx-auto my-10 p-4">
      {/* Card */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        {/* Image */}
        <figure className="lg:w-1/2">
          <img
            src={coverImage}
            alt={vehicleName}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-4xl font-bold">{vehicleName}</h2>
          <p className="text-sm text-gray-500">
            Added on: {new Date(createdAt).toLocaleDateString()}
          </p>

          <div className="divider"></div>

          <p>
            <span className="font-semibold">Owner:</span> {owner} ({userEmail})
          </p>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Sub Category:</span> {categories}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Price per day:</span> ${pricePerDay}
          </p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            <span
              className={
                availability.toLowerCase() === "available"
                  ? "text-green-600 font-bold"
                  : "text-red-600 font-bold"
              }
            >
              {availability}
            </span>
          </p>
          <p className="mt-4">
            <span className="font-semibold">Description:</span> {description}
          </p>

          {/* Action Buttons */}
          <div className="card-actions mt-6">
            <button className="btn btn-outline btn-primary">Book Now</button>
            <button className="btn btn-outline btn-primary">
              Contact Owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
