import { getHomeListApi } from "@/apis/list"
import { Image, List, InfiniteScroll } from "antd-mobile"
import { useEffect, useState } from "react"
import type { ListRes } from "@/types/list"
import { useNavigate } from "react-router-dom"

type Props = {
  channel_id: string
}

function HomeList(props: Props) {
  const navigate = useNavigate() 
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
        setSource(res.data.data)
      }catch {
        throw new Error('fetch homeList fail')
      }
    }
    getSourceData()
  }, [channel_id])

  const [hasMore, setHasMore] = useState(true)

  /**
   * 下滑加载更多
   */
  const handleLoadMore = async () => {
    try {
      const res = await getHomeListApi({
        channel_id,
        timestamp: source.pre_timestamp
      })
      setSource({
        results: [...source.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp
      })
      if(!res.data.data.results.length) setHasMore(false)
    }catch {
      throw new Error('fetch homeList fail')
    }
  }

  /**
   * 点击文章
   */
  const handleClickItem = (id: string) => {
    navigate(`/detail?id=${id}`)
  }

  return <>
    <List>
      {source.results.map(item => (
        <List.Item
          key={item.art_id}
          description={item.pubdate}
          onClick={() => handleClickItem(item.art_id)}
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
    <InfiniteScroll hasMore={hasMore} loadMore={handleLoadMore} threshold={50} />
  </>
}

export default HomeList