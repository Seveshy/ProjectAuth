import axios from "axios";
import { getToken, logout, isAuthenticated} from "./auth";


const api = axios.create({
  baseURL: "http://localhost:8085/skytef_hub/",
});

api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    console.log("CONFIG " + JSON.stringify(config));
    console.log(config);
    console.log("TOKEN " + token);
    if (!config.url.endsWith("login")) {
      config.headers.authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => {
  console.log("Resposta " + JSON.stringify(response));

  if (response.status == 403) {
    logout();
    isAuthenticated();
       
  }

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
