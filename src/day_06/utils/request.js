import axios from "axios";

const _request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 10 * 1000
})

_request.interceptors.request.use(
  config => {
    return config
  },
  err => Promise.reject(err)
)

_request.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

export { _request }