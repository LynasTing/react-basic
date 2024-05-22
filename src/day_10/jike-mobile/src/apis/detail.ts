import { _request } from "@/utils"
import type { DetailData} from '@/types/detail'
import type { Api } from "@/types/basic"

export const getArticleDetailApi = (id: string) => {
  return _request<Api<DetailData>>({
    url: `articles/${id}`
  })
}