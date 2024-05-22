import axios from 'axios'

const http = axios.create({
  baseURL: '/http://geek.itheima.net/v1_0',
  timeout: 5000
})

http.interceptors.request.use(
  config => config,
  err => Promise.reject(err)
)

http.interceptors.response.use(
  res => res,
  err => Promise.reject(err)
)

export default http.request