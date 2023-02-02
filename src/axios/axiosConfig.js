import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://198.251.65.152:8080',
  proxy: {
    host: 'localhost',
    port: 3000,
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = token;
      config.headers["Cache-Control"] = "no-cache";
      config.headers["Access-Control-Allow-Origin"] = "*";
    }
    config.headers["Cache-Control"] = "no-cache";
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
     
    }
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
    
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
