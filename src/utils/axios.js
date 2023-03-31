import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-booking-clone-production.up.railway.app/api",
  // baseURL: "http://localhost:3001/api/",
});

export default axiosInstance;
