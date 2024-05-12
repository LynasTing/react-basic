import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import('@/day_06/pages/Layout'))
const Login = lazy(() => import('@/day_06/pages/Login'))

const router = createBrowserRouter([
  {
    path: '',
    element: <Suspense fallback="加载中"><Layout /></Suspense>
  },
  {
    path: '/login',
    element: <Suspense fallback="加载中"><Login /></Suspense>
  },
])

export default router