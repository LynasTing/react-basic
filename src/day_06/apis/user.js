import { _request } from "@/day_06/utils";

/**
 * 登录
 */
export const loginApi = (data) => {
  return _request({
    url: '/authorizations',
    data,
    method: 'POST',
  })
}

/**
 * 获取用户个人信息
 */
export const getUserInFoApi = () => {
  return _request({
    url: '/user/profile',
    method: 'GET'
  })
}