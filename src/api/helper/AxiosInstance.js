import axios from 'axios';
import { devUrl, token } from '../../constants/Types';

const axiosInstance = axios.create({
  baseURL: `${devUrl}`,
});

axiosInstance.interceptors.request.use(function (config) {

  if(token){
    config.headers.Authorization =  `Bearer ${token}` ;
  }
  else{
    config.headers.Authorization =  null;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInstance;