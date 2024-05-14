import { _request } from "@/day_06/utils";

/**
 * 获取频道列表
 */
export const getChannelAPI = () => {
  return _request({
    url: '/channels'
  })
}

/**
 * 获取文章列表
 */
export const getArticleListAPI = (params) => {
  return _request({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}

/**
 * 发表文章
 * @param draft true 草稿 false 发布
 */
export const addArticleAPI = (data) => {
  return _request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
}