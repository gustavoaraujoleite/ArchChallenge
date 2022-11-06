import axios from "axios";

const api = axios.create({
    baseURL: 'https://arch-ebb01-default-rtdb.firebaseio.com/products.json'
})

export default api;