import { useAuth } from '@/hooks/useAuth'
import { User } from '@/types'
import { post } from '@/utils/request'
import { Button, Divider, Form, Input, message } from 'antd'

import './style.less'

const BaseInfo = () => {
  const { user } = useAuth()
  const initialValues: User = {
    username: user?.username,
    password: user?.password,
    realname: user?.realname || undefined
  }

  // 保存修改
  const onFinish = async (values: any) => {
    const res = await post('/api/user/updateUser', values)
    if (res.code === 0) {
      message.destroy()
      message.success(res.msg)
    } else {
      message.destroy()
      message.error(res.msg)
    }
  }
  return (
    <div className="base-info-component">
      <div className="title">基本信息</div>
      <div className="info-box">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={initialValues}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Divider />
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input maxLength={20} placeholder="请输入用户名" />
          </Form.Item>
          <Divider />
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password maxLength={50} placeholder="请输入密码" />
          </Form.Item>
          <Divider />
          <Form.Item label="姓名" name="realname">
            <Input maxLength={10} placeholder="请输入姓名" />
          </Form.Item>
          <Divider />
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              保存修改
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default BaseInfo
