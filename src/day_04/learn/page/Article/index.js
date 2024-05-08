import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function Article() {
  const navigate = useNavigate()

  const [params] = useSearchParams()
  const id = params.get('id')

  const newParams = useParams()
  const newId = newParams.id
  const newName = newParams.name
  return (
    <div>
      {/* <div>这里是searchParams传参的id: { id }</div> */}
      <div>这里是params传参的id: { newId }</div>
      <div>这里是params传参的name: { newName }</div>
      {/* 声明式 */}
      {/* <Link to="/login">Jump to login page</Link> */}
      {/* 命令式 */}
      <button onClick={() => navigate('/login')}>Jump to article page</button>
    </div>
  )
}