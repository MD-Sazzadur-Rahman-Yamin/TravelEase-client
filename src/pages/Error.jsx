import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4 text-center">
      <img src="/Tired.svg" alt="404 Error" className="w-64 md:w-96 mb-6" />

      <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-secondary">
        Page Not Found
      </h2>

      <p className="text-base-content mb-6 max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" className="btn btn-primary btn-outline btn-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
