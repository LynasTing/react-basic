import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <div>I'm login page !</div>
      {/* 声明式 */}
      {/* <Link to="/article">Jump to article page</Link> */}
      {/* 命令式 */}
      {/* <button onClick={() => navigate('/article')}>Jump to article page</button> */}
      {/* searchParams传参 */}
      <button onClick={() => navigate('/article?id=1')}>searchParams传参</button>
      <p>
        {/* params传参需要在router中配置好占位参数 */}
        {/* 如果有多个参数，就用/:xx的方式一直往后加 */}
        <button onClick={() => navigate('/article/1001/Lynas')}>params传参</button>
      </p>
    </div>
  )
}