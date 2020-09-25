import http from './utils/http';

export function bookRoom(params) {
    const data = http.post('/customers', params);

    return data.data;
}