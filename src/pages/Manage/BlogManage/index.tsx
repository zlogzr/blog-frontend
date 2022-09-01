import APageHeader from '@/components/APageheader'
import { Container } from '@/components/lib'
import { Button, Modal, Space } from 'antd'

import { useBlogIds } from './blogmanage.slice'
import BlogModal from './components/BlogModal'
import BlogTable from './components/BlogTable'
import { useBatDelBlog } from './hook/api'
import { useBlogModal } from './hook/blogModal'
import './style.less'

const BlogManage = () => {
  const { startAdd } = useBlogModal()
  const { mutate } = useBatDelBlog()
  const [ids, setIds] = useBlogIds()
  const confirmBatDelBlog = () => {
    Modal.confirm({
      title: '确定批量删除博客吗?',
      content: '点击确定删除',
      onOk() {
        mutate(
          { ids },
          {
            onSuccess: res => {
              if (res.code === 0) setIds([])
            }
          }
        )
      }
    })
  }
  return (
    <div className="blog-manage">
      <APageHeader title="博客管理">
        <Space>
          <Button type="primary" onClick={startAdd}>
            新增
          </Button>
          <Button type="primary" danger onClick={confirmBatDelBlog} disabled={!ids.length}>
            删除
          </Button>
        </Space>
      </APageHeader>
      <Container>
        <BlogTable />
      </Container>
      <BlogModal />
    </div>
  )
}

export default BlogManage
