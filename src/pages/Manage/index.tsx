/*
 * @Author: zlogzr
 * @Date: 2022-08-30 10:12
 * @LastEditors: zlogzr
 * @LastEditTime: 2022-09-02 16:32
 * @FilePath: \blog-node-mysql-expressd:\Desktop\blog-frontend\src\pages\Manage\index.tsx
 */
import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import { lazy } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'

import App404 from '@/components/App404'
import PageHeader from '@/components/PageHeader'

const UserManage = lazy(() => import('./UserManage'))
const BlogManage = lazy(() => import('./BlogManage'))
const LogManage = lazy(() => import('./LogManage'))

const { Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  { label: <Link to="user">用户管理</Link>, key: 'user', icon: <UserOutlined /> },
  { label: <Link to="blog">博客管理</Link>, key: 'blog', icon: <FileOutlined /> },
  { label: <Link to="log">日志管理</Link>, key: 'log', icon: <PieChartOutlined /> }
]

const useRouteType = () => {
  const units = useLocation().pathname.split('/')
  return units[units.length - 1]
}

const Manage = () => {
  const routeType = useRouteType()
  return (
    <div className="manage-page">
      <PageHeader />
      <Layout style={{ minHeight: 'calc(100vh - 6.4rem)' }}>
        <Sider theme="light" collapsible>
          <Menu defaultSelectedKeys={[routeType]} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Content>
            <Routes>
              <Route index element={<Navigate to="user" />} />
              <Route path="/user" element={<UserManage />} />
              <Route path="/blog" element={<BlogManage />} />
              <Route path="/log" element={<LogManage />} />
              <Route path={'/*'} element={<App404 />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Manage
