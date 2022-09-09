import axios from "axios";
import { parseCookies } from "nookies";
const { "nextAuth.token": token } = parseCookies();
export const api = axios.create({
  baseURL: "https://dashboards-server.herokuapp.com/",
  headers: {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  },
});
