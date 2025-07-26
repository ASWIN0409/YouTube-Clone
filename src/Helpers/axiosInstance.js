import axios from "axios";
import { YOUTUBE_API_URL } from "./constant";

export const axiosInstance = axios.create({
    baseURL: YOUTUBE_API_URL
});