import axios from "axios";

//random

const api = axios.create({
    baseURL: "https://api.chucknorris.io/jokes/"
})

export default api;