import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "@/common/config";
// import store from "@/store";
// import { LOGOUT } from "@/store/actions.type";

/** Request headers */
const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: API_URL,
});

/** Error handler */
axiosClient.interceptors.response.use(
  (response) => {
      if (response.config.url === "auth/login"){null}
      return response;
  },
  (err) => {
    // return other errors
    if (err.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    // error on login
    if (err.response.config.url === "auth/login") {
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return null //store.dispatch(LOGOUT);
  }
);

/** CRUD functions */
export const ApiService = {
  query(resource: string, params: AxiosRequestConfig) {
    return axiosClient.get(resource, params).catch((error) => {
      throw new Error(`Curadurías ApiService ${error}`);
    });
  },
  get(resource: any, slug = "") {
    return axiosClient.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`Curadurías ApiService ${error}`);
    });
  },
  post(resource: string, params?: any) {
    return axiosClient.post(`${resource}`, params);
  },
  update(resource: any, slug: any, params: any) {
    return axiosClient.put(`${resource}/${slug}`, params);
  },
  put(resource: any, params: any) {
    return axiosClient.put(`${resource}`, params);
  },
  delete(resource: string) {
    return axiosClient.delete(resource).catch((error) => {
      throw new Error(`Curadurías ApiService ${error}`);
    });
  },
};




/** Plugin to set auth header token */
// export function apiPlugin(store: any) {
//   store.watch((state: { auth: { user: any }; user: any }) => {
//     if (state.auth.user.access_token) {
//       axiosClient.defaults.headers[
//         "Authorization"
//       ] = `Bearer ${state.auth.user.access_token}`;
//     } else {
//       delete axiosClient.defaults.headers["Authorization"];
//     }
//   });
// }

// export default ApiService;
