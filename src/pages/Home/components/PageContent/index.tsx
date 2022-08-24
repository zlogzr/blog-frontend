import { get } from '@/utils/request'
import { Spin } from 'antd'
import moment from 'moment'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import './style.less'

const PageContent = () => {
  const { data, isLoading } = useQuery('blog', () => get('/api/blog/list'))
  return (
    <div className="page-content-component">
      <div className="container">
        {isLoading ? (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        ) : (
          data?.data?.map((item: any) => <ListItem key={item.id} {...item} />)
        )}
      </div>
    </div>
  )
}

const ListItem = (props: any) => {
  const { author, title, content, createtime, id } = props
  return (
    <Link to={`/home/${id}`}>
      <div className="list-item">
        <div className="tip">
          <span>{author}</span>
          <span style={{ padding: '0 4px' }}>•</span>
          <span>{createtime ? moment(createtime).format('YYYY-MM-DD') : '未知'}</span>
        </div>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
    </Link>
  )
}

export default PageContent
