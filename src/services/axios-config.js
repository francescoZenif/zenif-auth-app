import axios from "axios";
import {useRouter} from "vue-router";
import layoutState from "@/store/layoutState";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL, // Use the base URL from the .env file
  withCredentials: true, // Include credentials (cookies) in the request
});

const setCSRFToken = () => {
  const token = document.cookie.split("; ").find((row) => row.startsWith("XSRF-TOKEN="));
  if (token) {
    axiosInstance.defaults.headers.common["X-XSRF-TOKEN"] = token.split("=")[1];
  }
};

// Call this function to ensure CSRF token is set before making requests
setCSRFToken();

// Optionally, you can intercept requests and responses for error handling, etc.
axiosInstance.interceptors.request.use(
  (config) => {
    // layoutState.isLoading = true;
    const token = localStorage.getItem("zenif_auth_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Origin"] = `*`;
    }
    return config;
  },
  (error) => {
    layoutState.isLoading = false;
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
 
    layoutState.isLoading = false;
    const showSuccess = response?.config?.showSuccessModal;
    const arrayStatus = ["", "OK", "Created"];

    if (arrayStatus.includes(response.statusText) && response?.config?.method !== "get") {
      if (showSuccess !== false) {
        layoutState.modalSuccess = true;
      }
    }
    return response;
  },
  (error) => {
 
    layoutState.isLoading = false;
    // Handle global errors
    layoutState.modalError = error?.response?.data?.message;

    if (error?.response && error?.response?.status === 401 || error?.response?.status === 403) {
    //  localStorage.removeItem("zenif_auth_token");
      // router.push("/");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
