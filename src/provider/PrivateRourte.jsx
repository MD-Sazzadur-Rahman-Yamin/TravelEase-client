import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRourte = ({ children }) => {
const {user, loadingUser} = useAuth

  const location = useLocation();

  if (loadingUser) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRourte;
