import axios from "axios";
// import useAuth from "./useAuth";
// import { useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:3333",
});

const useAxios = () => {
  // const { user } = useAuth();
  const axiosH = instance;
  // useEffect(() => {
  //   const axiosSecure = instance.interceptors.request.use((config) => {
  //     config.headers.authorization = `Bearer ${user}`;
  //     return config;
  //   });
  //   return ()=>{
  //     instance.interceptors.request.eject(axiosSecure)
  //   }
  // }, [user]);
  return { axiosH };
};
export default useAxios;
