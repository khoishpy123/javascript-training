import api from "../../constant.js";

async function request(url) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(api.API + url, options);
  if (!res.ok) {
    throw new Error("An error has occurred");
  }
  const result = await res.json();
  return result;
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
