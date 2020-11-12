import axios from 'axios';
import { REACT_APP_API_IP } from '@env';

const api = axios.create({
  baseURL: REACT_APP_API_IP,
});

export const setJwtHeader = (jwt: string) => {
  api.defaults.headers.Authorization = `Bearer ${jwt}`;
};

export default api;
