import { LongButton } from '@/components/lib'
import { useAuth } from '@/hooks/useAuth'
import { AuthForm } from '@/types'
import { Form, Input, message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const Login = ({ setError }: { setError: (error: Error) => void }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (values: AuthForm) => {
    setLoading(true)
    const res = await login(values)
    if (res.code === 0) {
      setLoading(false)
      message.destroy()
      message.success(res.msg)
      navigate('/home')
    } else {
      setError(new Error(res.msg))
    }
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder={'用户名'} type="text" id={'username'} />
      </Form.Item>
      <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
        <Input placeholder={'密码'} type="password" id={'password'} />
      </Form.Item>
      <Form.Item>
        <LongButton loading={loading} htmlType={'submit'} type={'primary'}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  )
}
