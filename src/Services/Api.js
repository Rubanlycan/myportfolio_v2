import axios from 'axios'
import { Credentials } from '../config'

const { auth_url } = Credentials

let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

let API = axios.create({
    baseURL: process.env.REACT_APP_LOCAL_URl,
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
    console.log("response was received")
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