import axios from 'axios';
import { REACT_APP_API_IP } from '@env';

const api = axios.create({
  baseURL: REACT_APP_API_IP,
});

export default api;
