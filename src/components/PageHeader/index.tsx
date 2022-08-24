import ARow from '@/components/ARow'
import { useAuth } from '@/hooks/useAuth'
import { resetRoute } from '@/utils'
import { HddTwoTone } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Button, Dropdown, Menu } from 'antd'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import './style.less'

const PageHeader = () => {
  return (
    <Header between={true} className="pageheader-component">
      <div className="left" onClick={resetRoute}>
        <ARow gap={1}>
          <HddTwoTone twoToneColor="#4578F8" style={{ fontSize: '20px' }} />
          <h1>Blog</h1>
        </ARow>
      </div>
      <div className="right">
        <User />
      </div>
    </Header>
  )
}

const User = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  return (
    <Dropdown
      overlay={
        <Menu
          items={[
            {
              key: 'personalCenter',
              label: (
                <Button type={'link'}>
                  <Link to="/personal">个人中心</Link>
                </Button>
              )
            },
            {
              key: 'logout',
              label: (
                <Button onClick={handleLogout} type={'link'}>
                  登出
                </Button>
              )
            }
          ]}
        />
      }
    >
      <Button type={'link'} onClick={e => e.preventDefault()}>
        Hi，{user?.username}
      </Button>
    </Dropdown>
  )
}

const Header = styled(ARow)`
  position: fixed;
  width: 100%;
  padding: 0 3.2rem;
  line-height: 6.4rem;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 999;
`

export default PageHeader
