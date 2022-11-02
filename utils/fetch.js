import { getToken, hasExpiredToken } from "../api/tokens";

export async function authFetch(url, params, logout) {
  const token = getToken();
  if (!token) {
    //usuario no logeado
    logout();
  } else {
    if (hasExpiredToken(token)) {
      //token caducado o expirado
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  }
}
