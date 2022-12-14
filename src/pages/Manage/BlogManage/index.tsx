/*
 * @Author: zlogzr
 * @Date: 2022-08-30 10:12
 * @LastEditors: zlogzr
 * @LastEditTime: 2022-09-07 14:12
 * @FilePath: \blog-node-mysql-expressd:\Desktop\blog-frontend\src\pages\Manage\BlogManage\index.tsx
 * @Description: 博客管理主页面
 */
import { Button, Input, Modal, Space } from 'antd'

import APageHeader from '@/components/APageheader'
import { Container } from '@/components/lib'
import { useSetUrlSearchParam, useUrlQueryParam } from '@/hooks/useUrlQueryParam'

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
  const { keyword } = useUrlQueryParam(['keyword'])
  const setUrlSearchParam = useSetUrlSearchParam()

  // 确定批量删除
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
  // 搜索
  const handleSearch = (value: string) => {
    setUrlSearchParam({ keyword: value })
  }
  return (
    <div className="blog-manage">
      <APageHeader
        title="博客管理"
        extra={
          <Input.Search defaultValue={keyword} placeholder="请输入标题" onSearch={handleSearch} />
        }
      >
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
