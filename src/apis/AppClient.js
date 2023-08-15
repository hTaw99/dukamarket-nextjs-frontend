import axios from "axios";

const baseURL = `${process.env.SERVER}/api`;

export const axiosDefault = axios.create({
  baseURL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true,
});
