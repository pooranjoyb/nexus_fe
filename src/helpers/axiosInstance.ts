import axios from "axios";
import { getHeaders } from "@/helpers/headers";
import { API_BASE_URL } from "./config/keys.conf";

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/core/api/v1`,
  headers: getHeaders(),
  withCredentials: true,
});

export default axiosInstance;
