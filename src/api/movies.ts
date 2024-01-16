import { axiosInstance } from "@src/config/axios";

export const fetchUpcomingMovies = ({ page = 1 }) => axiosInstance.get(`movie/upcoming?page=${page}`)