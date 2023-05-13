// @ts-nocheck
import axios from 'axios';

let headers = { 'Content-Type': 'application/json' }
export const Auth = axios.create({baseURL: 'http://localhost:8080/v1/', headers: headers});

const token = sessionStorage.getItem('token')

headers = { 'Content-Type': 'application/json', 'token': String(token)}

export const Api = axios.create({baseURL: 'http://localhost:8080/v1/', headers: headers});

