import { Button, NavBar } from 'antd-mobile'
import type { DetailData} from '@/types/detail'
import { getArticleDetailApi } from '@/apis/detail'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'


const Detail = () => {
  const navigate = useNavigate()
  const [detail, setDetail] = useState<DetailData>()
  const [params] = useSearchParams()
  const id = params.get('id')

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await getArticleDetailApi(id!)
        setDetail(res.data.data)
      } catch (error) {
        throw new Error('fetch article detail fail')
      }
    }
    getDetail()
  }, [id])
  if(!detail) {
    return <div>loading...</div>
  }

  return <>
    <NavBar onBack={() => navigate(-1)}>{detail?.title}</NavBar>
    <div dangerouslySetInnerHTML={{
      __html: detail.content
    }}></div>
  </>
}

export default Detail