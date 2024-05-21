import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ENDPOINT,
});

client.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    const API_KEY = import.meta.env.VITE_BACK_API_KEY;
    config.headers['x-api-key'] = API_KEY;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if(error.response.status === 401) {
     /** 
      * Refresh token logic
      * 
      * This is a simplified version of the refresh token logic using a dummy api,
      *  in a real-world scenario you would need to handle the refresh token
      *  logic in a more secure way and  avoid remove the token with the
      *  location.reload() method.
     */
      sessionStorage.removeItem("token");
      window.location.reload();

      const { data, status } = await client.post("/authentication/refresh/", {
        expiresInMins: 5,
      }); 
      
      if (status === 200) {
        sessionStorage.setItem("token", data.token);
        return client.request(error.config);
      }
    }

    return Promise.reject(error);
  }
)

export default client;