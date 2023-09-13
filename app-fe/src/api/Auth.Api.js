import axios from "axios";
import config from "@/config/props.js";
import { postCookie } from "@/config/cookiesconfig.js";

const AuthApi = axios.create({
  baseURL: `${config.URL_API}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signIn = async (credentials) => {
  const res = await AuthApi.post("/", credentials)
    .then((data) => {
      if (data.status === 200) postCookie(data.data.token);

      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
