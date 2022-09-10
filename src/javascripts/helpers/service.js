import api from "../constant.js";

async function request(url, method = "GET", body) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "POST" || method === "PUT") {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(api.API + url, options);
  if (!res.ok) {
    throw new Error("An error has occurred");
  }
  const result = await res.json();
  return result;
}

/**
 * Use url to return result request to read data
 * @param {string} url
 * @returns result request to read data
 */
function getRequest(url) {
  return request(url);
}

/**
   * Use url to delete data by DETELE method
   * @param {string} url 
   */
function deleteRequest(url){
  return request(url, "DELETE");
}

/**
   * Use url and body to send data to server by POST method
   * @param {string} url 
   */
function createRequest(url, body){
  return request(url, "POST", body);
}

/**
   * Use url and body to send data to a server to update a resource by PUT method
   * @param {string} url 
   */
function updateRequest(url, body){
  return request(url, "PUT", body);
}

export default {
  getRequest,
  deleteRequest,
  createRequest,
  updateRequest,
};
