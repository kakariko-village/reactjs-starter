import axios from "axios";
import { authenticate } from "./authenticate";

const baseURL =  import.meta.env.VITE_APP_UNIVERSITY_API;;
const baseSettings = {
  headers: {
    "Content-Type": "application/json",
  },
};
const universityInstance = axios.create({ baseURL, ...baseSettings });

universityInstance.interceptors.request.use(authenticate);
universityInstance.interceptors.response.use(
  undefined,
  function axiosRetryInterceptor(err) {
    if (err.response.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default universityInstance;
