import axios from "axios";
import { parseCookies } from "nookies";
const { "nextAuth.token": token } = parseCookies();
export const api = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  }
});
