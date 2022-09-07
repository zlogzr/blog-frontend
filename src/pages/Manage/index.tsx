/*
 * @Author: zlogzr
 * @Date: 2022-08-30 10:12
 * @LastEditors: zlogzr
 * @LastEditTime: 2022-09-07 15:31
 * @FilePath: \blog-node-mysql-expressd:\Desktop\blog-frontend\src\pages\Manage\index.tsx
 */
import { FileOutlined, HomeOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb, MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import { lazy } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

import App404 from '@/components/App404'
import PageHeader from '@/components/PageHeader'

const HomeManage = lazy(() => import('./HomeManage'))
const UserManage = lazy(() => import('./UserManage'))
const BlogManage = lazy(() => import('./BlogManage'))
const LogManage = lazy(() => import('./LogManage'))

const { Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  { label: <Link to="">首页</Link>, key: 'manage', icon: <UserOutlined /> },
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
          <Menu selectedKeys={[routeType]} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Content>
            {/* 面包屑 */}
            {/* <ManageBreadcrumb /> */}
            <Routes>
              <Route index element={<HomeManage />} />
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

const breadcrumbNameMap: Record<string, string> = {
  user: '用户管理',
  blog: '博客管理',
  log: '日志管理'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ManageBreadcrumb = () => {
  const location = useLocation()

  const pathSnippets = location.pathname
    .split('/')
    .filter(i => i)
    .slice(1)
  // 主页不展示面包屑
  if (pathSnippets?.length === 0) {
    return null
  }
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = pathSnippets.slice(0, index + 1).join('/')
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    )
  })

  const breadcrumbItems = [
    <Breadcrumb.Item key="manage">
      <Link to="">
        <HomeOutlined />
      </Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems)
  return (
    <Breadcrumb style={{ backgroundColor: '#fff', padding: '6px 12px' }}>
      {breadcrumbItems}
    </Breadcrumb>
  )
}

export default Manage
