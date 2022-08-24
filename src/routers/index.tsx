import { FullPageLoading } from '@/components/lib'
import { useAuth } from '@/hooks/useAuth'
import { Button, Result } from 'antd'
import { Suspense, lazy } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))
const BlogDetail = lazy(() => import('@/pages/BlogDetail'))
const Personal = lazy(() => import('@/pages/Personal'))

const AppRouter = () => {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <Routes>
        <Route index element={<RootRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path={'/home/:blogId'} element={<BlogDetail />} />
        <Route path={'/personal/*'} element={<Personal />} />
        <Route path={'/*'} element={<App404 />} />
      </Routes>
    </Suspense>
  )
}

const App404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary">
        <Link to="home">Back Home</Link>
      </Button>
    }
  />
)

const RootRoute = () => {
  const { user } = useAuth()
  if (user) {
    return <Navigate to="/home" />
  }
  return <Navigate to="/login" />
}

export default AppRouter
