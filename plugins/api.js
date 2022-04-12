import axios from "axios";

const DB_URL = '' // placeholder for ternary expression for prod / dev urls

export const axiosGet = axios.create({
    baseURL:'',
    timeout: 5000,
    headers: {}
})