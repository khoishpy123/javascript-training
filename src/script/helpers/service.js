import api from "../constants/api.js";

async function request(url, id, method = "GET") {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (id) {
    if (method === "GET") {
      url += "?" + objectToQueryString(id);
    } else {
      options.body = JSON.stringify(id);
    }
  }

  const response = await fetch(api.API + url, options);

  if (response.status !== 200) {
    return generateErrorResponse(
      "The server responded with an unexpected status.",
    );
  }

  const result = await response.json();

  return result;
}

/**
 *
 * @param {object} obj
 * @returns object
 */
function objectToQueryString(obj) {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
}

/**
 *
 * @param {string} message
 * @returns string
 */
function generateErrorResponse(message) {
  return {
    status: "error",
    message,
  };
}

/**
 * Use url and id to return result request to read data
 * @param {string} url
 * @param {number} id
 * @returns result request to read data
 */
function get(url, id) {
  return request(url, id);
}

export default {
  get,
};
