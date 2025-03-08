import Cookies from 'js-cookie';

const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const setTokens = (access, refresh) => {
  Cookies.set(TOKEN_KEY, access, { expires: 1, sameSite: 'strict' }); // 1 day
  Cookies.set(REFRESH_TOKEN_KEY, refresh, { expires: 7, sameSite: 'strict' }); // 7 days
};

export const getAccessToken = () => {
  return Cookies.get(TOKEN_KEY);
};

export const getRefreshToken = () => {
  return Cookies.get(REFRESH_TOKEN_KEY);
};

export const removeTokens = () => {
  Cookies.remove(TOKEN_KEY);
  Cookies.remove(REFRESH_TOKEN_KEY);
};