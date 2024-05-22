import { useEffect, useState } from 'react'
import { getChannelsApi } from '@/apis/list'
import type { ChannelItem } from '@/types/apis/list'

function useTabs() {
  const [channels, setChannels] = useState<ChannelItem[]>([])
  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await getChannelsApi()
        setChannels(res.data.data.channels)
      }catch {
        throw new Error('getChannels is fail')
      }
    }
    getChannels()
  }, [])

  return {
    channels
  }
}

export default useTabs
