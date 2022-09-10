import api from "../constant.js";

/**
 * Function uses url, id and method to return the result requested by the user
 * @param {string} url
 * @param {number} id
 * @param {method} method
 * @returns {} result
 */
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
  console.log("re", options);
  const response = await fetch(api.API_HOST + url, options);

  const data = await response.json();

  return data;
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
 * Use url and id to return result request to read data
 * @param {string} url
 * @param {number} id
 * @returns result request to read data
 */
function get(url, id) {
  return request(url, id);
}

/**
 * Use url and id to return result request to create data
 * @param {string} url
 * @param {number} id
 * @returns result request to create data
 */
function create(url, id) {
  return request(url, id, "POST");
}

/**
 * Use url and id to return result request to update data
 * @param {string} url
 * @param {number} id
 * @returns result request to update data
 */
function update(url, id) {
  return request(url, id, "PUT");
}

/**
 * Use url and id to return result request to delete data
 * @param {string} url
 * @param {number} id
 * @returns result request to delete data
 */
function remove(url, id) {
  return request(url, id, "DELETE");
}

export default {
  get,
  create,
  update,
  remove,
};
