import PageHeader from '@/components/PageHeader'
import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import { lazy } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

const UserManage = lazy(() => import('./UserManage'))
const BlogManage = lazy(() => import('./BlogManage'))
const LogManage = lazy(() => import('./LogManage'))

const { Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  { label: <Link to="user">用户管理</Link>, key: '1', icon: <UserOutlined /> },
  { label: <Link to="blog">博客管理</Link>, key: '2', icon: <FileOutlined /> },
  { label: <Link to="log">日志管理</Link>, key: '3', icon: <PieChartOutlined /> }
]

const Manage = () => {
  return (
    <div className="manage-page">
      <PageHeader />
      <Layout style={{ minHeight: 'calc(100vh - 6.4rem)' }}>
        <Sider theme="light" collapsible>
          <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Content>
            <Routes>
              <Route index element={<Navigate to="user" />} />
              <Route path="/user" element={<UserManage />} />
              <Route path="/blog" element={<BlogManage />} />
              <Route path="/log" element={<LogManage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Manage
