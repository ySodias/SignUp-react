// @ts-nocheck
import axios from 'axios';

let headers = { 'Content-Type': 'application/json' }
export const Auth = axios.create({baseURL: 'https://signup-kwq1.onrender.com/v1/', headers: headers});

const token = sessionStorage.getItem('token')

headers = { 'Content-Type': 'application/json', 'token': String(token)}

export const Api = axios.create({baseURL: 'https://signup-kwq1.onrender.com/v1/', headers: headers});

