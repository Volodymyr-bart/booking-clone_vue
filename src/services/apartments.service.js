import axios from "../utils/axios";

export const getApartmentList = () => {
  return axios.get("apartaments");
};
export const getApartmentById = (id) => {
  return axios.get(`apartaments/:${id}`);
};
