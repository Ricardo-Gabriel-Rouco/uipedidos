import axios from "axios";

let userCred;
if (typeof window !== "undefined") {
  userCred = JSON.parse(window.localStorage.getItem("userCred") || "{}");
}

export const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

if (userCred && userCred.token) {
  axiosConfig.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${userCred.token}`;
}
