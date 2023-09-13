import cookie from "js-cookie";
import { COOKIE_KEY } from '../config/props.js'

export const postCookie = (data) => {
  cookie.set(COOKIE_KEY, data, {
    expires: 1,
    secure: true,
    sameSite: "strict",
  });
};

export const getCookie = () => {
  return cookie.get(COOKIE_KEY);
};

export const deleteCookie = () => {
  cookie.set(COOKIE_KEY, null, {
    expires: 0,
    secure: true,
    sameSite: "strict",
  });
};