import axios from 'axios';

import dotenv from 'dotenv'
dotenv.config();

const apiKey = process.env.OMDB_API_KEY;
const baseUrl = 'http://www.omdbapi.com/';

const moviesClient = axios.create({
  baseURL: baseUrl,
  params: {
    apikey: apiKey,
  },
});

// Interceptor to handle errors globally
moviesClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Error response:', error.response.data);
        return Promise.reject(error.response.data);
        } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        return Promise.reject({ message: 'No response received from server' });
        } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        return Promise.reject({ message: error.message });
        }
    }
    );
export default moviesClient;

