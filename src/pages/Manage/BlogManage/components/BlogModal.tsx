import { Button, Drawer, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'

const BlogModal = (props: any) => {
  const { visible, setVisible } = props

  const [form] = useForm()

  const closeModal = () => {
    form.resetFields()
    setVisible(false)
  }
  const onFinish = () => {
    console.log(111)
  }
  return (
    <Drawer onClose={closeModal} visible={visible} width={'100%'}>
      <div className="blog-modal">
        <h1>创建博客</h1>
        <Form form={form} layout={'vertical'} style={{ width: '40rem' }} onFinish={onFinish}>
          <Form.Item
            label={'标题'}
            name={'title'}
            rules={[{ required: true, message: '请输入标题' }]}
          >
            <Input placeholder={'请输入标题'} />
          </Form.Item>

          <Form.Item
            label={'内容'}
            name={'content'}
            rules={[{ required: true, message: '请输入内容' }]}
          >
            <Input.TextArea placeholder={'请输入内容'} />
          </Form.Item>
          <Form.Item style={{ textAlign: 'right' }}>
            <Button type={'primary'} htmlType={'submit'}>
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Drawer>
  )
}

export default BlogModal
