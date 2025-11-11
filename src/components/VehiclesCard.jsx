import React from 'react';
import { Link } from 'react-router';

const VehiclesCard = ({LatestVehicles}) => {
    const { vehicleName, coverImage, pricePerDay, categories,_id } = LatestVehicles;
    return (
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
          className='h-60'
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
            <Link className='w-full' to={`/view-details/${_id}`}>
              <button className="btn btn-primary btn-outline w-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default VehiclesCard;