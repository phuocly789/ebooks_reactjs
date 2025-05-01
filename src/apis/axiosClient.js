import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;