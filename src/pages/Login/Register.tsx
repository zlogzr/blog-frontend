import { LongButton } from '@/components/lib'
import { register } from '@/store/auth-provider'
import { Form, Input, message } from 'antd'

interface IProps {
  setError: (error: Error) => void
  setIsRegister: (boo: boolean) => void
}
export const Register = ({ setError, setIsRegister }: IProps) => {
  const handleSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string
    password: string
    cpassword: string
  }) => {
    if (cpassword !== values.password) {
      setError(new Error('请确认两次输入的密码相同'))
      return
    }
    const res = await register(values)
    if (res.code === 0) {
      setIsRegister(false)
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
      <Form.Item name={'cpassword'} rules={[{ required: true, message: '请确认密码' }]}>
        <Input placeholder={'确认密码'} type="password" id={'cpassword'} />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={'submit'} type={'primary'}>
          注册
        </LongButton>
      </Form.Item>
    </Form>
  )
}
