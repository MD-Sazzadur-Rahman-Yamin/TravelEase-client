import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
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
        <NavLink to="/">Add Vehicle</NavLink>
      </li>
      <li>
        <NavLink to="/">My Vehicles</NavLink>
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
  return (
    <nav className="navbar bg-base-100 shadow-sm">
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
        <button className="btn btn-primary btn-outline">LogOut</button>
        <button
          onClick={toggleTheme}
          className="btn btn-primary-content btn-outline"
        >
          {theme === "travelease-light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
