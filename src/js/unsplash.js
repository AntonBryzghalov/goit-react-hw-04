import axios from "axios";

const unsplashAPI = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
    Authorization: "Client-ID T6V8lBh5XuINNGx2g1WNVD6Mc6-TGgGZpXqw1ZuOzPA",
  },
});

export async function fetchImages(query, page, per_page = 10) {
  const response = await unsplashAPI.get("/search/photos", {
    params: {
      query,
      page,
      per_page,
    },
  });
  return response.data;
}
