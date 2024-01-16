import axios from "axios"
import Keys from "react-native-keys"

export const axiosInstance = axios.create({
  baseURL: Keys.TMDB_BASE_URL
})

axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.params = { ...config.params, api_key: Keys.secureFor("TMDB_API") }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response.data;
}, function (error) {

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});