import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthRouter } from '@/day_06/components/AuthRouter'

const Layout = lazy(() => import('@/day_06/pages/Layout'))
const Login = lazy(() => import('@/day_06/pages/Login'))

const router = createBrowserRouter([
  {
    path: '',
    element:<AuthRouter><Layout /></AuthRouter>
  },
  {
    path: '/login',
    element: <Suspense fallback="加载中"><Login /></Suspense>
  },
])

export default router