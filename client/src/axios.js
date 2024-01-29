import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tweetx-lime.vercel.app'
})

export default instance;
