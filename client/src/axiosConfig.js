import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://candidate-referal.onrender.com',
});

export default axiosInstance;