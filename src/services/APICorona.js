import axios from 'axios';

const api = axios.create({
    baseURL: "https://covid-api-brasil.herokuapp.com",
});

export default api;