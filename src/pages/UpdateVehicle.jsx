import React from "react";
import useAuth from "../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";

const UpdateVehicle = () => {
  const vehicleData = useLoaderData();
  const { user } = useAuth();
  const {axiosH} = useAxios();
  const navigate = useNavigate();

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

    const updatedVehicleData = {
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
      .patch(`/vehicle/${vehicleData._id}`, updatedVehicleData)
      .then((result) => {
        console.log(result);
        if (result.data.modifiedCount) {
          toast.success("Vehicle update successfully");
        }
        navigate("/my-vehicle");
      })
      .catch(() => {
        toast.error("Fail to update vehicle");
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10">
        <div className="card-body">
          <h2 className="text-4xl font-bold text-center mb-4">
            Update Vehicle
          </h2>

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
                defaultValue={vehicleData.vehicleName}
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
                defaultValue={vehicleData?.category || ""}
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
                defaultValue={vehicleData.pricePerDay}
              />

              {/* Location */}
              <label className="label">Location</label>
              <input
                type="text"
                className="input"
                placeholder="Enter location"
                name="location"
                required
                defaultValue={vehicleData.location}
              />

              {/* Availability */}
              <label className="label">Availability</label>
              <select
                name="availability"
                className="select select-bordered w-full"
                required
                defaultValue={vehicleData.availability}
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
                defaultValue={vehicleData.description}
              ></textarea>

              {/* Cover Image */}
              <label className="label">Cover Image URL</label>
              <input
                type="text"
                className="input"
                placeholder="Enter cover image URL"
                name="coverImage"
                required
                defaultValue={vehicleData.coverImage}
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
              <button className="btn btn-neutral mt-4">Update Vehicle</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateVehicle;
