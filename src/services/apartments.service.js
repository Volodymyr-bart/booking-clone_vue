import axios from "../utils/axios";

export const getApartmentList = () => {
  return axios.get("/apartments");
};
export const getApartmentById = (id) => {
  return axios.get(`/apartments/${id}`);
};
