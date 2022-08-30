import { Divider, Space, Table, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import moment from 'moment'
import React from 'react'

import { useBlogs } from '../hook/api'
import { useBlogModal } from '../hook/blogModal'

interface DataType {
  id: number
  title: string
  content: string
  author: string
  createtime: string
}

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  }
}

const BlogTable = () => {
  const { data, isLoading } = useBlogs()
  const { startEdit } = useBlogModal()

  const columns: ColumnsType<DataType> = [
    {
      title: '标题',
      dataIndex: 'title',
      width: 100
    },
    {
      title: '内容',
      dataIndex: 'content',
      width: 180
    },
    {
      title: '作者',
      dataIndex: 'author',
      width: 80
    },
    {
      title: '创建时间',
      dataIndex: 'createtime',
      width: 100,
      render: text => moment(text || undefined).format('YYYY-MM-DD HH:mm')
    },
    {
      title: '操作',
      width: 90,
      render: (text, record) => (
        <Space split={<Divider type="vertical" />}>
          <Typography.Link onClick={() => startEdit(record.id)}>编辑</Typography.Link>
          <Typography.Link>删除</Typography.Link>
        </Space>
      )
    }
  ]
  return (
    <div>
      <Table
        rowKey="id"
        loading={isLoading}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data?.data}
      />
    </div>
  )
}

export default BlogTable
