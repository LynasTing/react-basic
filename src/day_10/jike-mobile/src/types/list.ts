export type ChannelItem = {
  id: number
  name: string
}

export interface ChannelRes {
  channels: ChannelItem[]
}

export type ListItem = {
  art_id: string
  title: string
  aut_id: string
  comm_count: number
  pubdate: string
  aut_name: string
  is_top: number
  cover: {
    type: number
    images: string[]
  }
}

export interface ListRes {
  results: ListItem[]
  pre_timestamp: string
}

export type RequestParams = {
  channel_id: string
  timestamp: string
}
