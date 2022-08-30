import { ErrorBox } from '@/components/lib'
import { handleBackResult } from '@/utils'
import { Button, Drawer, Form, Input, Spin } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { useEffect } from 'react'

import { useAddBlog, useEditBlog } from '../hook/api'
import { useBlogModal } from '../hook/blogModal'

const BlogModal = () => {
  const [form] = useForm()
  const { blogModalOpen, editingBlog, isLoading, close } = useBlogModal()

  useEffect(() => {
    form.setFieldsValue({
      title: editingBlog?.data.title,
      content: editingBlog?.data.content
    })
  }, [editingBlog])
  const title = editingBlog ? '编辑博客' : '创建博客'
  const useMutateBlog = editingBlog ? useEditBlog : useAddBlog
  const { mutateAsync, error, isLoading: mutateLoading } = useMutateBlog()

  const closeModal = () => {
    form.resetFields()
    close()
  }
  const onFinish = (values: any) => {
    mutateAsync({ ...editingBlog?.data, ...values }).then(res => {
      if (handleBackResult(res)) {
        form.resetFields()
        close()
      }
    })
  }

  return (
    <Drawer forceRender={true} onClose={closeModal} visible={blogModalOpen} width={'100%'}>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <div className="blog-modal">
          <h1>{title}</h1>
          <ErrorBox error={error} />
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
              <Button loading={mutateLoading} type={'primary'} htmlType={'submit'}>
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </Drawer>
  )
}

export default BlogModal
