import axios from "axios";
import config from "@/config/props.js";
import { getCookie } from "@/config/cookiesconfig.js";

const BitacoraApi = axios.create({
  baseURL: `${config.URL_API}/bitacora`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const get = async (params) => {
  const res = await BitacoraApi.get(`/${params}`)
    .then((data) => {
      return data.data.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const post = async (data) => {
  const res = await BitacoraApi.post("/", data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
