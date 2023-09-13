import axios from "axios";
import config from "@/config/props.js";
import { getCookie } from "@/config/cookiesconfig.js";

const PersonaApi = axios.create({
  baseURL: `${config.URL_API}/persona`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const get = async (params) => {
  const res = await PersonaApi.get('/')
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const post = async (data) => {
  const res = await PersonaApi.post("/", data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const remove = async (id) => {
  const res = await PersonaApi.delete(`/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
