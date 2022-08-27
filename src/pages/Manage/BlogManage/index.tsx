import APageHeader from '@/components/APageheader'
import { Container } from '@/components/lib'
import { Button, Space } from 'antd'

import BlogTable from './BlogTable'

const BlogManage = () => {
  return (
    <div className="blog-manage">
      <APageHeader title="博客管理">
        <Space>
          <Button type="primary">新增</Button>
          <Button type="primary" danger>
            删除
          </Button>
        </Space>
      </APageHeader>
      <Container>
        <BlogTable />
      </Container>
    </div>
  )
}

export default BlogManage
