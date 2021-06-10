import axios from "axios";
import { getToken, logout, isAuthenticated} from "./auth";
import { toast } from 'react-toastify'

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
    console.log('ERROR')
    return Promise.reject(error);
    
  }
);

api.interceptors.response.use((response, error) => {

  return response;

}, async  (error) => { 

  if (error.response.status === 401 || error.response.status === 403) {
    toast.error("Seu acesso expirou.");
    logout();
  }
  return Promise.reject(error);
});

export default api;
