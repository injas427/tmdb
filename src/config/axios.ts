import axios from "axios"
import Keys from "react-native-keys"

export const axiosInstance = axios.create({
  baseURL: Keys.TMDB_BASE_URL
})