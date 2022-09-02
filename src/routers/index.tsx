import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import App404 from '@/components/App404'
import { FullPageLoading } from '@/components/lib'
import { useAuth } from '@/hooks/useAuth'

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))
const BlogDetail = lazy(() => import('@/pages/BlogDetail'))
const Personal = lazy(() => import('@/pages/Personal'))
const Manage = lazy(() => import('@/pages/Manage'))

const AppRouter = () => {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <Routes>
        <Route index element={<RootRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path={'/home/:blogId'} element={<BlogDetail />} />
        <Route path={'/personal/*'} element={<Personal />} />
        <Route path={'/manage/*'} element={<Manage />} />
        <Route path={'/*'} element={<App404 />} />
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
