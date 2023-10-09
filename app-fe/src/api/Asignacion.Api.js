import axios from "axios";
import { URL_API } from "@/config/props.js";
import { getCookie } from "@/config/cookiesconfig.js";

const AsignacionApi = axios.create({
  baseURL: `${URL_API}/asignacion`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const get = async () => {
  const res = await AsignacionApi.get("/")
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const post = async (data) => {
  const res = await AsignacionApi.post("/", data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const remove = async (id) => {
  const res = await AsignacionApi.delete(`/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
