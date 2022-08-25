import api from "../constants/api.js";

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

  // if (id) {
  //   if (method === "GET") {
  //     url += "?" + objectToQueryString(id);
  //   } else {
  //     options.body = JSON.stringify(id);
  //   }
  // }

  // if (response.status !== 200) {
  //   return generateErrorResponse(
  //     "The server responded with an unexpected status.",
  //   );
  // }

// /**
//  *
//  * @param {object} obj
//  * @returns object
//  */
// function objectToQueryString(obj) {
//   return Object.keys(obj)
//     .map((key) => key + "=" + obj[key])
//     .join("&");
// }

/**
 *
 * @param {string} message
 * @returns string
 */
// function generateErrorResponse(message) {
//   return {
//     status: "error",
//     message,
//   };
// }

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
