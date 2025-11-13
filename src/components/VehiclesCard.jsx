import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const VehiclesCard = ({ Vehicle }) => {
  const { vehicleName, coverImage, pricePerDay, categories, _id } = Vehicle;
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="card bg-base-100 w-full shadow-sm"
    >
      <figure>
        <img
          className="h-60"
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
          <Link className="w-full" to={`/view-details/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="btn btn-primary btn-outline w-full"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default VehiclesCard;
