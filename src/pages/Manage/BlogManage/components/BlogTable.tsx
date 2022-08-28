import { get } from '@/utils/request'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import { useQuery } from 'react-query'

interface DataType {
  id: number
  title: string
  content: string
  author: string
  createtime: string
}

const columns: ColumnsType<DataType> = [
  {
    title: '标题',
    dataIndex: 'title'
  },
  {
    title: '内容',
    dataIndex: 'content'
  },
  {
    title: '作者',
    dataIndex: 'author'
  },
  {
    title: '创建时间',
    dataIndex: 'createtime'
  }
]

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  }
}

const BlogTable = () => {
  const { data, isLoading } = useQuery('blog', () => get('/api/blog/list'))
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
