import { ReactComponent as Logo } from '@/assets/logo.svg'
import { ErrorBox } from '@/components/lib'
import { Button, Col, Divider, Row } from 'antd'
import { useState } from 'react'

import { Login } from './Login'
import { Register } from './Register'
import './style.less'

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return (
    <div className="login-page">
      <div className="login-box">
        <Row>
          <Col span={12}>
            <Logo />
          </Col>
          <Col span={12}>
            <div className="login-card">
              <h2 className="login-title">{isRegister ? '请注册' : '请登录'}</h2>
              <ErrorBox error={error} />
              {isRegister ? (
                <Register setError={setError} setIsRegister={setIsRegister} />
              ) : (
                <Login setError={setError} />
              )}
              <Divider />
              <Button
                type="link"
                onClick={() => {
                  setIsRegister(!isRegister)
                  setError(null)
                }}
              >
                {isRegister ? '已经有账号了？直接登录' : '没有账号？注册新账号'}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default LoginPage
