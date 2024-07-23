// utils/request.js
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080/localApi', // 请求后端接口的baseurl
  timeout: 100000          // 设置请求的超时时间
})

// 请求拦截器
http.interceptors.request.use(config => {
  // 例如
  // config.headers.Authorization = `Bearer ${引入token}`
  return config
},
  err => {
    return Promise.reject(err)
  })

// 响应拦截器
http.interceptors.response.use(response => {
  return response.data
},
  err => {
    return Promise.reject(err)
  })


export function get(url, params) {
  return http.get(url, params || {})
}

export function post(url, data) {
  return http.post(url, data)
}

export default http
