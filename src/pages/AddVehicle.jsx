import React from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { motion } from "motion/react";


const AddVehicle = () => {
  const { user } = useAuth();
  const {axiosH} = useAxios();

  const handleAddVehicle = (e) => {
    e.preventDefault();

    const form = e.target;
    const vehicleName = form.vehicleName.value;
    const owner = form.ownerName.value;
    const category = form.category.value;
    const pricePerDay = Number(form.pricePerDay.value);
    const location = form.location.value;
    const availability = form.availability.value;
    const description = form.description.value;
    const coverImage = form.coverImage.value;
    const userEmail = form.email.value;

    const vehicleData = {
      vehicleName,
      owner,
      category,
      pricePerDay,
      location,
      availability,
      description,
      coverImage,
      userEmail,
      createdAt: new Date().toISOString(),
      categories: category,
    };

    axiosH
      .post("/vehicle", vehicleData)
      .then((result) => {
        if (result.data.insertedId) {
          toast.success("Vehicle added successfully");
          e.target.reset();
        }
      })
      .catch(() => {
        toast.error("Fail to add vehicle");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10">
        <div className="card-body">
          <h2 className="text-4xl font-bold text-center mb-4">Add Vehicle</h2>

          <form onSubmit={handleAddVehicle}>
            <fieldset className="fieldset">
              {/* Vehicle Name */}
              <label className="label">Vehicle Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter vehicle name"
                name="vehicleName"
                required
              />

              {/* Owner Name */}
              <label className="label">Owner Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter owner name"
                name="ownerName"
                required
                defaultValue={user.displayName}
                readOnly
              />

              {/* Category */}
              <label className="label">Category</label>
              <select
                name="category"
                className="select select-bordered w-full"
                required
              >
                <option disabled defaultValue>
                  Select category
                </option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Electric</option>
                <option>Van</option>
                <option>Pickup</option>
                <option>Hatchback</option>
              </select>

              {/* Price Per Day */}
              <label className="label">Price Per Day (BDT)</label>
              <input
                type="number"
                className="input"
                placeholder="Enter price per day"
                name="pricePerDay"
                required
              />

              {/* Location */}
              <label className="label">Location</label>
              <input
                type="text"
                className="input"
                placeholder="Enter location"
                name="location"
                required
              />

              {/* Availability */}
              <label className="label">Availability</label>
              <select
                name="availability"
                className="select select-bordered w-full"
                required
              >
                <option>Available</option>
                {/* <option>Not Available</option> */}
              </select>

              {/* Description */}
              <label className="label">Description</label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Enter vehicle description"
                name="description"
                required
              ></textarea>

              {/* Cover Image */}
              <label className="label">Cover Image URL</label>
              <input
                type="text"
                className="input"
                placeholder="Enter cover image URL"
                name="coverImage"
                required
              />

              {/* User Email */}
              <label className="label">User Email</label>
              <input
                type="email"
                className="input"
                placeholder="user@email.com"
                name="email"
                defaultValue={user.email}
                readOnly
              />

              {/* Submit Button */}
              <motion.button
                className="btn btn-neutral mt-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Add Vehicle
              </motion.button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
