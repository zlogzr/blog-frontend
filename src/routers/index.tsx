import { FullPageLoading } from '@/components/lib'
import { useAuth } from '@/hooks/useAuth'
import { get } from '@/utils/request'
import { Suspense, lazy, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))

const AppRouter = () => {
  const navigate = useNavigate()
  const { bootUser } = useAuth()
  useEffect(() => {
    get('/api/user/me').then(res => {
      if (res.code === 0) {
        bootUser(res.data)
      } else {
        navigate('/login')
      }
    })
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
