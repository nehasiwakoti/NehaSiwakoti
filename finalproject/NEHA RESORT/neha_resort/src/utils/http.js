import axios from 'axios';

const http = axios.create({
    baseURL: `http://localhost:1234`,
    headers: {
      'Content-Type': 'application/json'
    }
  });


export default http;