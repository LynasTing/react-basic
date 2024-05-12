import { getToken } from "@/day_06/utils"
import { Navigate } from "react-router-dom"

/**
 * 如果有Token就正常访问，否则跳登录
 */
export function AuthRouter({ children }) {
  if(getToken()) {
    return <>{children}</>
  }else {
    return <Navigate to="/login" replace />
  }
}