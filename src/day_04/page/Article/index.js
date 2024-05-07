import { Link, useNavigate } from "react-router-dom"

export default function Article() {
  const navigate = useNavigate()
  return (
    <div>
      <div>I'm article page !</div>
      {/* 声明式 */}
      <Link to="/login">Jump to login page</Link>
      {/* 命令式 */}
      <button onClick={() => navigate('/login')}>Jump to article page</button>
    </div>
  )
}