import axios from "axios";
import { getHeaders } from "@/helpers/headers";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: getHeaders(),
  withCredentials: true,
});

export default axiosInstance;
