import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthRouter } from '@/day_06/components/AuthRouter'

const Layout = lazy(() => import('@/day_06/pages/Layout'))
const Login = lazy(() => import('@/day_06/pages/Login'))
const Home = lazy(() => import('@/day_06/pages/Home'))
const Article = lazy(() => import('@/day_06/pages/Article'))
const Publish = lazy(() => import('@/day_06/pages/Publish'))

const router = createBrowserRouter([
  {
    path: '/',
    element:<AuthRouter><Layout /></AuthRouter>,
    children: [
      {
        index: true,
        element: <Suspense><Home /></Suspense>
      },
      {
        path: '/article',
        element: <Suspense><Article /></Suspense>
      },
      {
        path: '/publish',
        element: <Suspense><Publish /></Suspense>
      }
    ]
  },
  {
    path: '/login',
    element: <Suspense fallback="加载中"><Login /></Suspense>
  },
])

export default router