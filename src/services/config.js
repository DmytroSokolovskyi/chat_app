import axios from "axios";

export const apiUrl = 'https://api.chucknorris.io/jokes/random';

export const config = {
    baseURL: apiUrl,
}
export const axiosInstance = axios.create(config);
