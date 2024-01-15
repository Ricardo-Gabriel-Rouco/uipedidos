import axios from "axios";

const userCred = JSON.parse(localStorage.getItem("userCred") || "{}");

export const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${userCred?.token}`