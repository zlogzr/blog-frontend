/*
 * @Author: zlogzr
 * @Date: 2022-09-02 16:33
 * @LastEditors: zlogzr
 * @LastEditTime: 2022-09-07 15:31
 * @FilePath: \blog-node-mysql-expressd:\Desktop\blog-frontend\src\components\App404\index.tsx
 * @Description: 404 页面
 */
import { Button, Result, Space } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const App404 = () => {
  const navigate = useNavigate()
  // 返回上一步
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Space>
          <Button type="primary" onClick={handleBack}>
            返回上一步
          </Button>
          <Button type="primary">
            <Link to="home">返回首页</Link>
          </Button>
        </Space>
      }
    />
  )
}

export default App404
