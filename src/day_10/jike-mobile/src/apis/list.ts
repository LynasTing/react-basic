import { _request } from "@/utils"
import type { ChannelRes, ListRes, RequestParams } from '@/types/list'
import type { Api } from "@/types/basic"

export const getChannelsApi = () => {
  return _request<Api<ChannelRes>>({
    url: '/channels'
  })
}

export const getHomeListApi = (params: RequestParams) => {
  return _request<Api<ListRes>>({
    url: '/articles',
    params
  })
}