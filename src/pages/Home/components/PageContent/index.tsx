import { get } from '@/utils/request'
import { Spin } from 'antd'
import { useQuery } from 'react-query'

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
  const { author, title, content } = props
  return (
    <div className="list-item">
      <div className="tip">
        <span>{author}</span>
        <span>•</span>
        <span>2021</span>
      </div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  )
}

export default PageContent
