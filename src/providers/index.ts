import axios from 'axios';
import Cookies from 'universal-cookie'

export const cookies = new Cookies()

const token = cookies.get('token')
let headers = { 'Content-Type': 'application/json' }
export const Auth = axios.create({baseURL: 'https://signup-r5nc.onrender.com/v1', headers: headers});

headers = { 'Content-Type': 'application/json', 'token': String(token)}

export const Api = axios.create({baseURL: 'https://signup-r5nc.onrender.com/v1', headers: headers});

