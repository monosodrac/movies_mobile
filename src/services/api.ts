import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/11",
    params: {
        api_key: "d31619189dae58e5e178f55538ab590d",
        language: "pt-BR",
        include_adult: true,
    },
});