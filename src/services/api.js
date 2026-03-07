const BASE_URL = "http://localhost:5000/api";

export const api = async (endpoint, method = "GET", body) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: body ? JSON.stringify(body) : null,
  });

  return response.json();
};