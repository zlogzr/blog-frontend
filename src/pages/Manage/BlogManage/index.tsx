import APageHeader from '@/components/APageheader'
import { Container } from '@/components/lib'
import { Button, Space } from 'antd'
import { useState } from 'react'

import BlogModal from './components/BlogModal'
import BlogTable from './components/BlogTable'
import './style.less'

const BlogManage = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="blog-manage">
      <APageHeader title="博客管理">
        <Space>
          <Button
            type="primary"
            onClick={() => {
              setVisible(true)
            }}
          >
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
      <BlogModal visible={visible} setVisible={setVisible} />
    </div>
  )
}

export default BlogManage
