import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : 'https://reciper-api.vercel.app',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
})