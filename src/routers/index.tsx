import { FullPageLoading } from '@/components/lib'
import { useAuth } from '@/hooks/useAuth'
import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))

const AppRouter = () => {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <Routes>
        <Route index element={<RootRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Suspense>
  )
}

const RootRoute = () => {
  const { user } = useAuth()
  if (user) {
    return <Navigate to="/home" />
  }
  return <Navigate to="/login" />
}

export default AppRouter
