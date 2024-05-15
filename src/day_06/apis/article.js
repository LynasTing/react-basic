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

/**
 * 删除文章
 * @param id 文章id
 */ 
export const delArticleAPI = id => {
  return _request({
    url: `/mp/articles/${id}`,
    method: 'DELETE'
  })
}

/**
 * 文章回显
 */
export const echoArticleAPI = id => {
  return _request({
    url: `/mp/articles/${id}`,
  })
}

/**
 * 更新文章
 */
export const putArticleAPI = data => {
  return _request({
    url: `/mp/articles/${data.id}?draft=false`,
    method: 'PUT',
    data
  })
}