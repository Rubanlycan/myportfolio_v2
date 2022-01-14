import axios from 'axios'
import { LOCAL_API } from './constant'

let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

let API = axios.create({
    baseURL: LOCAL_API,
    headers,
});

API.interceptors.request.use(
    (req) => {
        console.log("request was sent");
        return req;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use((res) => {
    console.log("request was received")
    return res
}, (error) => {
    return Promise.reject(error)
})

const api = {
    registerSenderData(body) {
        return API.post("/registerSender", body)
    }
}

export default api