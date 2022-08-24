import { ReactComponent as Avator } from '@/assets/avator.svg'
import PageHeader from '@/components/PageHeader'
import { get } from '@/utils/request'
import { Spin } from 'antd'
import moment from 'moment'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router'

import './style.less'

const useRouteId = () => {
  console.log('useLocation().pathname', useLocation().pathname)
  const units = useLocation().pathname.split('/')
  return units[units.length - 1]
}
const BlogDetail = () => {
  const blogId = useRouteId()
  const { data, isLoading } = useQuery('blogDetail', () => get(`/api/blog/detail?id=${blogId}`))
  return (
    <div className="blog-detail-page">
      <PageHeader />
      <div className="container">
        <div className="blog-detail">
          {isLoading ? <Spin /> : <BlogDetailContent data={data?.data} />}
        </div>
      </div>
    </div>
  )
}

const BlogDetailContent = ({ data }: { data: any }) => {
  const { author, createtime, content } = data
  return (
    <div className="blog-detail-content">
      <h2>{data.title}</h2>
      <div className="author-box">
        <Avator className="author-img" />
        <div className="author-info">
          <div className="author">{author}</div>
          <div className="time">
            {createtime ? moment(createtime).format('YYYY年MM月DD日 HH:mm') : null}
          </div>
        </div>
      </div>
      <div className="content-box">{content}</div>
    </div>
  )
}

export default BlogDetail
