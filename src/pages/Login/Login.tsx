import { LongButton } from '@/components/lib'
import { login } from '@/store/auth-provider'
import { AuthForm } from '@/types'
import { Form, Input, message } from 'antd'
import { useNavigate } from 'react-router'

const navigate = useNavigate()
export const Login = ({ setError }: { setError: (error: Error) => void }) => {
  const handleSubmit = async (values: AuthForm) => {
    const res = await login(values)
    if (res.code === 0) {
      navigate('/home')
      message.destroy()
      message.success(res.msg)
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
        <LongButton htmlType={'submit'} type={'primary'}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  )
}