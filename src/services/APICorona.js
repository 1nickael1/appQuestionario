import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-questionario.herokuapp.com',
});

export default api;
