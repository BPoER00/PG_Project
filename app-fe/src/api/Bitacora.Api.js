import axios from "axios";
import { URL_API } from "@/config/props.js";
import { getCookie } from "@/config/cookiesconfig.js";

const BitacoraApi = axios.create({
  baseURL: `${URL_API}/bitacora`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const get = async () => {
  const res = await BitacoraApi.get("/")
    .then((data) => {
      return data.data.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const getAsignacionesGroup = async () => {
  const res = await BitacoraApi.get("/AsignacionesGroup")
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

