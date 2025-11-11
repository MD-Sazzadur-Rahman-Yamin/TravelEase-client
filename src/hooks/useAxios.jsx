import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3333",
}); 


const useAxios = () => {
    return instance;
};
export default useAxios;
