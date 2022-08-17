import { getAuthUser } from '@/auth/auth-provider'
import { FullPageLoading } from '@/components/lib'
import { Suspense, lazy, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))

const AppRouter = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const user = getAuthUser()
    if (!user) {
      navigate('/login')
    }
  }, [])
  return (
    <Suspense fallback={<FullPageLoading />}>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
