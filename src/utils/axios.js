import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-booking-clone-production.up.railway.app/api",
});

export default axiosInstance;
