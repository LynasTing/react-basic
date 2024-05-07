import { createBrowserRouter, createHashRouter } from "react-router-dom";

import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";
import NotFound from "../page/NotFound";

// history模式 使用createBrowserRouter,需要后端支持, 底层是 history对象 + pushState事件
// hash模式 使用createHashRouter, url后会拼接#, 无需后端支持, 底层监听hashChange时间

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // 给二级路由去掉path, 并设置index为true,就会自动匹配成默认路由
      {
        index: true,
        element: <About />
      },
      // {
      //   path: 'about',
      //   element: <About />
      // },
      {
        path: 'board',
        element: <Board />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/article/:id/:name',
    element: <Article />
  },
  // 在路由配置数组的默认，使用path为*,表示404
  {
    path: '*',
    element: <NotFound />
  }
])

export default router