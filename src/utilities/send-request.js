export default async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };

  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const token = localStorage.getItem("token");
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  } 

  console.log("URL:", url);
  console.log("Options:", options);

  const res = await fetch(url, options);

  if (res.ok) {
    return res.json();
  } else if (res.status === 401) {
    throw new Error("Unauthorized access. Please check your login status and try again.");
  } else {
    const errorResponse = await res.json();
    console.log("Error Response:", errorResponse);
    throw new Error("Bad Request");
  }
}
