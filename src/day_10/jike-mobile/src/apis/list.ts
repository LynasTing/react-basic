import { _request } from "@/utils"
import type { ChannelRes } from '@/types/apis/list'
import type { Api } from "@/types/apis/basic"

export const getChannelsApi = () => {
  _request<Api<ChannelRes>>({
    url: '/channels'
  })
}