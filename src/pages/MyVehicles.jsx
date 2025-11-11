import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router";
import Swal from "sweetalert2";

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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosH.delete(`/vehicle/${_id}`).then((data) => {
          if (data.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Vehicle has been deleted.",
              icon: "success",
            });
            const remainingVehicles = myVehicles.filter(vehicle=> vehicle._id!==_id);
            setMyVehicles(remainingVehicles);
          }
        });
      }
    });
  };

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
              <th className="text-center">#</th>
              <th className="text-center">Image</th>
              <th className="text-center">Vehicle Name</th>
              <th className="text-center">Category</th>
              <th className="text-center">Price/Day</th>
              <th className="text-center">Availability</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row*/}
            {myVehicles.map((vehicle, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td className="text-center">
                  <div className="avatar">
                    <div className="w-10 rounded">
                      <img
                        src={vehicle.coverImage}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-center">{vehicle.vehicleName}</td>
                <td className="text-center">{vehicle.category}</td>
                <td className="text-center">{vehicle.pricePerDay}</td>
                <td className="text-center">
                  <div class="badge badge-neutral badge-outline">
                    {vehicle.availability}
                  </div>
                </td>
                <td>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2">
                    <Link to={`/view-details/${vehicle._id}`}>
                      <button className="btn btn-primary btn-outline">
                        View Details
                      </button>
                    </Link>
                    <button className="btn btn-primary btn-outline">
                      View Details
                    </button>
                    <button
                      onClick={() => handleDelete(vehicle._id)}
                      className="btn btn-primary btn-outline"
                    >
                      Delete
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
