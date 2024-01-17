import { axiosInstance } from "@src/config/axios";

export const fetchUpcomingMovies = ({ page = 1 }) => axiosInstance.get(`movie/upcoming?page=${page}`)

export const searchMovies = ({ page = 1, query = "" }) => axiosInstance.get(`search/movie?query=${encodeURI(query)}&page=${page}`)