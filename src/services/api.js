import axios from "axios";
import { getToken } from "./auth";


const api = axios.create({
  baseURL: "https://sgs.skytef.com.br/",
});

api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    console.log(config);
    if (!config.url.endsWith("autenticar")) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => {
  console.log("Resposta " + JSON.stringify(response));
  return response;
}, async  (error)  =>{
  // const originalRequest = error.config;
  // if (error.response.status === 403 && !originalRequest._retry) {
  //   originalRequest._retry = true;
  //   const access_token = await refreshAccessToken();            
  //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
  //   return axiosApiInstance(originalRequest);
  // }
  return Promise.reject(error);
});

export default api;
