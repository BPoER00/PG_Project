import axios from "axios";
import config from "@/config/props.js";
import { getCookie } from "@/config/cookiesconfig.js";

const DocumentoApi = axios.create({
  baseURL: `${config.URL_API}/documento`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const get = async () => {
  const res = await DocumentoApi.get('/')
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const post = async (data) => {
  const res = await DocumentoApi.post("/", data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};