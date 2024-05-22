export type ChannelItem = {
  id: number
  name: string
}

export interface ChannelRes {
  channels: ChannelItem[]
}