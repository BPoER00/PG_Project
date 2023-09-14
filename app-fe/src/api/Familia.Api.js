import axios from "axios";
import { URL_API } from "@/config/props.js";
import { getCookie } from "@/config/cookiesconfig.js";

const FamiliaApi = axios.create({
  baseURL: `${URL_API}/familia`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const get = async (params) => {
  const res = await FamiliaApi.get("/")
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const post = async (data) => {
  const res = await FamiliaApi.post("/", data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const put = async (id, data) => {
  const res = await FamiliaApi.put(`/${id}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const remove = async (id) => {
  const res = await FamiliaApi.delete(`/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
