import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3333",
}); 


const useAxios = () => {
  const axiosH = instance
    return { axiosH };
};
export default useAxios;
