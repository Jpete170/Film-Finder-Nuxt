import axios from "axios";

const DB_URL = (process.env.NODE_ENV == "production") ? "https://fastapi-movies.fly.dev/api/" : "http://localhost:8000/api/" // placeholder for ternary expression for prod / dev urls



export const axiosGet = axios.create({
    baseURL:`${DB_URL}`,
    timeout: 5000,
    
})