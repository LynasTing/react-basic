import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <div>I'm login page !</div>
      {/* 声明式 */}
      <Link to="/article">Jump to article page</Link>
      {/* 命令式 */}
      <button onClick={() => navigate('/article')}>Jump to article page</button>
    </div>
  )
}