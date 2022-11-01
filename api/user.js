import { BASE_PATH } from "../utils/constants";

// ->
export async function registerApi(formData) {
  try {
    const url = `${BASE_PATH}/api/auth/local/register`;
    const params = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// ->
export async function loginApi(formData) {
  try {
    const URL = `${BASE_PATH}/api/auth/local`;
    const PARAMS = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const RESPONSE = await fetch(URL, PARAMS);
    const RESULT = await RESPONSE.json();
    return RESULT;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// ->
export async function resetPasswordApi(email) {
  try {
    const url = `${BASE_PATH}/api/auth/forgot-password`;
    const params = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
