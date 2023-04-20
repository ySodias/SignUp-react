// @ts-nocheck
import axios from 'axios';

const token = sessionStorage.getItem('token')
let headers = { 'Content-Type': 'application/json' }
export const Auth = axios.create({baseURL: 'https://signup-r5nc.onrender.com/v1', headers: headers});

headers = { 'Content-Type': 'application/json', 'token': String(token)}

export const Api = axios.create({baseURL: 'https://signup-r5nc.onrender.com/v1', headers: headers});

