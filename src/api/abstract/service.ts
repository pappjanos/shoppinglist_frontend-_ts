import axios, { AxiosInstance } from "axios";
import store from "../../store/index";

export default class Service {
  api: AxiosInstance;
  constructor(baseURL: string) {
    this.api = axios.create({ baseURL });
    /*
    this.api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.api.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => {
        
        store.dispatch(
          "general/setSnackbar",
          {
            message: `Error status: ${error.response.status}`,
            color: "red",
          },
          { root: true }
        );
        return Promise.reject(error);
      }
    );*/
  }
  setAuthToken(token: string) {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  removeAuthToken() {
    this.api.defaults.headers.common.Authorization = "";
  }
}
