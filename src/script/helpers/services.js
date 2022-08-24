// get data by Get method
export async function getRequest(url) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("An error has occurred");
  }
  const result = await res.json();
  return result;
}

//Post data by POST method
export async function postRequest(url, body) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("An error has occurred");
  }
  const result = await res.json();
  return result;
}

//Deleta data by DELETE method
export async function deleteRequest(url) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("An error has occurred");
  }
  const result = await res.json();
  return result;
}

//Update data by PUT method
export async function updateRequest(url, body) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("An error has occurred");
  }
  const result = await res.json();
  return result;
}
