import axios from "axios";
import { parseCookies } from "nookies";
const { "nextAuth.token": token } = parseCookies();
export const api = axios.create({
  baseURL: "https://dashboards-server.herokuapp.com/",
  // baseURL: "http://localhost:3001/",

  headers: {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  },
});
