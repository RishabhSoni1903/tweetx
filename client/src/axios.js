import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tweetx-api.vercel.app'
})

export default instance;
