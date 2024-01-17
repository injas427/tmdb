import {axiosInstance} from '@src/config/axios';

export const fetchGenres = () => axiosInstance.get('genre/movie/list');
