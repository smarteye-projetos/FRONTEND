import axios from 'axios';

const api  = axios.create({
    baseURL:"https://apismarteye.herokuapp.com/api",
});

export default api;