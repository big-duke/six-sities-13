import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';
import { useNavigate } from 'react-router-dom';
import { browserHistory } from '../browser-history';
import { AppRoute } from '../const';

const BACKEND_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    }
  );
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.code === 'ERR_NETWORK') {
        browserHistory.push(AppRoute.HTTP500);
      }

      if (error.response?.status === 404) {
        browserHistory.push(AppRoute.HTTP404);
      }
    }
  );
  return api;
};
