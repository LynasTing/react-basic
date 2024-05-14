import { getChannelAPI } from "@/day_06/apis/article"
import { useEffect, useState } from "react"

/**
 * 获取文章的频道列表
 */
const useGetChannels = () =>{
  // 频道列表
  const [channels, setChannels] = useState([])
  useEffect(() => {
    const getChannels = async () => { 
      const res = await getChannelAPI()
      const newRes = res?.data?.channels.map(item => {
        return {
          label: item.name,
          value: item.id
        }
      })
      setChannels(newRes)
    }
    getChannels()
  }, [])
  return channels
} 

export { useGetChannels }