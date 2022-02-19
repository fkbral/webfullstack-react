import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
