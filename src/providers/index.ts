import axios from 'axios';
import Cookies from 'universal-cookie'

const headers = { 'Content-Type': 'application/json'}

export const Api = axios.create({baseURL: 'http://localhost:8080/v1', headers: headers});

export const cookies = new Cookies()