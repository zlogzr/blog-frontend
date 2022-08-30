import APageHeader from '@/components/APageheader'
import { Container } from '@/components/lib'
import { Button, Space } from 'antd'

import BlogModal from './components/BlogModal'
import BlogTable from './components/BlogTable'
import { useBlogModal } from './hook/blogModal'
import './style.less'

const BlogManage = () => {
  const { startAdd } = useBlogModal()
  return (
    <div className="blog-manage">
      <APageHeader title="博客管理">
        <Space>
          <Button type="primary" onClick={startAdd}>
            新增
          </Button>
          <Button type="primary" danger>
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
