import axios from "axios";

const API = axios.create({
    baseURL:'*****',
    timeout: 2000
})

export default API