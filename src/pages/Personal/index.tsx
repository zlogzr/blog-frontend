import PageHeader from '@/components/PageHeader'
import { Menu, MenuProps } from 'antd'
import { lazy } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'

import './style.less'

const BaseInfo = lazy(() => import('./components/BaseInfo'))
const Other = lazy(() => import('./components/Other'))

const items: MenuProps['items'] = [
  {
    label: <Link to="baseInfo">基本信息</Link>,
    key: 'baseInfo'
  },
  {
    label: <Link to="other">其他</Link>,
    key: 'other'
  }
]

const useRouteType = () => {
  const units = useLocation().pathname.split('/')
  return units[units.length - 1]
}

const Personal = () => {
  const routeType = useRouteType()
  return (
    <div className="personal-page">
      <PageHeader />
      <div className="container">
        <div className="personal-content">
          <div className="sider">
            <Menu selectedKeys={[routeType]} items={items} style={{ border: 0 }} />
          </div>
          <div className="content">
            <Routes>
              <Route index element={<Navigate to={'baseInfo'} />} />
              <Route path="/baseInfo" element={<BaseInfo />} />
              <Route path="/other" element={<Other />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personal
