import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const MyVehicles = () => {
  const { user } = useAuth();
  const [myVehicles, setMyVehicles] = useState([]);
  const axiosH = useAxios();
  useEffect(() => {
    if (!user?.email) return;
    axiosH
      .get(`/vehicle?userEmail=${user.email}`)
      .then((res) => setMyVehicles(res.data))
      .catch((err) => console.error(err));
  }, [user, axiosH, setMyVehicles]);
  console.log(myVehicles);
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
        My Vehicle
      </h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Category</th>
              <th>Price/Day</th>
              <th>Availability</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row*/}
            {myVehicles.map((vehicle, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-10 rounded">
                      <img
                        src={vehicle.coverImage}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>{vehicle.category}</td>
                <td>{vehicle.pricePerDay}</td>
                <td>{vehicle.availability}</td>
                <td>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2">
                    <button className="btn btn-primary btn-outline">
                      View Details
                    </button>
                    <button className="btn btn-primary btn-outline">
                      View Details
                    </button>
                    <button className="btn btn-primary btn-outline">
                      View Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVehicles;
