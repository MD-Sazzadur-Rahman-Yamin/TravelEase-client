import React from 'react';

const VehiclesCard = ({LatestVehicles}) => {
    const { vehicleName, coverImage, pricePerDay, categories } = LatestVehicles;
    return (
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
            // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            src={coverImage}
            alt={vehicleName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{vehicleName}</h2>

          <p>{`$ ${pricePerDay}/Day`}</p>
          <p>Categories: {categories}</p>

          <div className="card-actions">
            <button className="btn btn-primary btn-outline w-full">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default VehiclesCard;