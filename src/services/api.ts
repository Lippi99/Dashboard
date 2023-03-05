import axios from "axios";
import { parseCookies } from "nookies";
const { "nextAuth.token": token } = parseCookies();
export const api = axios.create({
  // baseURL: "http://localhost:3001/",
  baseURL: "dashboardserver-production.up.railway.app/",

  headers: {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  },
});
