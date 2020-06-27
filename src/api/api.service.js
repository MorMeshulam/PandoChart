import axios from "axios";
import { serviceUrl } from "../config/constants";

export const getRequest = (action, query) => {
  const apiActionUrl = `${serviceUrl}/${action}?${query}`;
  console.log(apiActionUrl);
  return axios.get(apiActionUrl);
};

export const postRequest = (action, date) => {
  return axios.post(`${serviceUrl}/${action}`, date);
};
