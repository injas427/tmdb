import { axiosInstance } from '@src/config/axios';

export const fetchUpcomingMovies = ({ page = 1 }) =>
  axiosInstance.get(`movie/upcoming?page=${page}`);

export const fetchMovieDetail = ({ id }: { id: number }) =>
  axiosInstance.get(`movie/${id}`);

export const searchMovies = ({ page = 1, query = '' }) =>
  axiosInstance.get(`search/movie?query=${encodeURI(query)}&page=${page}`);

export const getMovieVideos = ({ id }: { id: number }) =>
  axiosInstance.get(`movie/${id}/videos`);
