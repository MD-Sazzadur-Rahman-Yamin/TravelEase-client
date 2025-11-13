import React from "react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import { motion } from "motion/react";


const Registration = () => {
  const {axiosH} = useAxios();
  const navigate = useNavigate();
  const {
    loginWithGoogle,
    setUser,
    authCreateUserWithEmailAndPassword,
    updateUser,
  } = useAuth();

  const handleCreateUserWithEmailAndPassword = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least 1 uppercase, 1 lowercase, and be 6+ characters long."
      );
      return;
    }
    authCreateUserWithEmailAndPassword(email, password)
      .then((result) => {
        updateUser({
          displayName: name,
          photoURL: photoUrl,
        });
        setUser({ ...result.user, displayName: name, photoURL: photoUrl });
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          photoUrl: result.user.photoURL,
        };
        axiosH.post("/users", newUser);
        toast.success("Account created successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          photoUrl: result.user.photoURL,
        };
        axiosH.post("/users", newUser);
        toast.success(`Login successful`);
        navigate("/");
      })
      .catch((error) => toast(error.message));
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-4xl font-bold text-center">Registration</h2>
          <form onSubmit={handleCreateUserWithEmailAndPassword}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter Your Name"
                name="name"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Enter Your Email"
                name="email"
                required
              />
              <label className="label">Photo-URL</label>
              <input
                type="text"
                className="input"
                placeholder="Enter Your Photo-URL"
                name="photoUrl"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Enter Your Password"
                name="password"
                required
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="btn btn-primary btn-outline mt-4"
              >
                Register
              </motion.button>
            </fieldset>
          </form>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={handleLoginWithGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </motion.button>
          <Link className="text-center font-bold" to="/login">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Already have an account? Go to Login
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
