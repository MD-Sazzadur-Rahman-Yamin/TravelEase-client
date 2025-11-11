import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { logout, user } = useAuth();
  const [theme, setTheme] = useState("travelease-light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    const newTheme =
      theme === "travelease-light" ? "travelease-dark" : "travelease-light";
    setTheme(newTheme);
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-vehicles">All Vehicles</NavLink>
      </li>
      <li>
        <NavLink to="/add-vehicle">Add Vehicle</NavLink>
      </li>
      <li>
        <NavLink to="/my-vehicle">My Vehicles</NavLink>
      </li>
      <li>
        <NavLink to="/">My Bookings</NavLink>
      </li>
    </>
  );
  const loginLinks = (
    <>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/registration">Login</NavLink>
      </li>
    </>
  );

  const handleLogout = (e) => {
    e.preventDefault();
    logout()
      .then(() => {
        toast.success("Log Out successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              {loginLinks}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" to="/">
            TravelEase
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-between items-center gap-4">
              <div className="relative inline-block group">
                <div className="w-9 h-9 rounded-full ring-2 ring-primary ring-offset-2 overflow-hidden cursor-pointer flex items-center justify-center">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaRegUserCircle className="w-full h-full" />
                  )}
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10">
                  {user.displayName || "No Name"}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-primary btn-outline"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center gap-4">
              <Link to="/login">
                <button className="btn btn-primary btn-outline hidden sm:block">
                  Login
                </button>
              </Link>
              <Link to="/registration">
                <button className="btn btn-primary btn-outline hidden sm:block">
                  Register
                </button>
              </Link>
            </div>
          )}

          <button
            onClick={toggleTheme}
            className="btn btn-primary btn-outline ml-4"
          >
            {theme === "travelease-light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
