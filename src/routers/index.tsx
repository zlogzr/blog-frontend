import { FullPageLoading } from '@/components/lib'
import { Suspense, lazy } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))

const AppRouter = () => {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <HashRouter>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </Suspense>
  )
}

export default AppRouter
