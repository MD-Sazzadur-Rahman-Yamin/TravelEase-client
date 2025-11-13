import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { motion } from "motion/react";


const MyBookings = () => {
  const { user } = useAuth();
  const [myBooking, setMyBooking] = useState([]);
  const { axiosH } = useAxios();
  useEffect(() => {
    if (!user?.email) return;
    axiosH
      .get(`/booking?userEmail=${user.email}`)
      .then((res) => setMyBooking(res.data))
      .catch((err) => console.error(err));
  }, [user, axiosH, setMyBooking]);
  console.log(myBooking);

  const handleCancel = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: 'No, I changed my mind',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosH
          .delete(`/booking/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Booking has been Cancel.",
                icon: "success",
              });
              const remainingBooking = myBooking.filter(
                (booking) => booking._id !== _id
              );
              setMyBooking(remainingBooking);
            } else {
              Swal.fire({
                title: "Not Found",
                text: "Booking not found or already Canceled.",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
        My Booking
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
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row*/}
            {myBooking.map((booking, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="avatar"
                  >
                    <div className="w-10 rounded">
                      <img
                        src={booking.coverImage}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </motion.div>
                </td>
                <td className="text-center">{booking.vehicleName}</td>
                <td className="text-center">{booking.category}</td>
                <td className="text-center">{booking.pricePerDay}</td>
                <td>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2">
                    <Link to={`/view-details/${booking.vehicleId}`}>
                      <motion.button
                        className="btn btn-primary btn-outline"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        View Details
                      </motion.button>
                    </Link>
                    <motion.button
                      onClick={() => handleCancel(booking._id)}
                      className="btn btn-primary btn-outline"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      Cancel Booking
                    </motion.button>
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

export default MyBookings;
