import { getHomeListApi } from "@/apis/list"
import { Image, List } from "antd-mobile"
import { useEffect, useState } from "react"
import type { ListRes } from "@/types/apis/list"

type Props = {
  channel_id: string
}

function HomeList(props: Props) {
  const { channel_id } = props
  const [source, setSource] = useState<ListRes>({
    results: [],
    pre_timestamp: '' + new Date().getTime()
  })
  useEffect(() => {
    const getSourceData = async () => {
      try {
        const res = await getHomeListApi({
          channel_id,
          timestamp: '' + new Date().getTime()
        })
        console.log(`res + ::>>`, res)
        setSource(res.data.data)
      }catch {
        throw new Error('fetch homeList fail')
      }
    }
    getSourceData()
  }, [channel_id])

  return <>
    <List>
      {source.results.map(item => (
        <List.Item 
          key={item.art_id}
          description={item.pubdate}
          prefix={
            <Image
              src={item.cover.images?.[0]}
              style={{ borderRadius: 20 }}
              fit="cover"
              width={40}
              height={40}
            />
        }>
          {item.title}
        </List.Item>
      ))}
    </List>
  </>
}

export default HomeList