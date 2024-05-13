/**
 * 存token
 */
export const setToken = (token) => {
  localStorage.setItem('token', token)
}

/**
 * 取token
 */
export const getToken = () => {
  return localStorage.getItem('token')
}

/**
 * 存token
 */
export const removeToken = () => {
  localStorage.removeItem('token')
}


