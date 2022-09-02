/*
 * @Author: zlogzr
 * @Date: 2022-09-02 16:33
 * @LastEditors: zlogzr
 * @LastEditTime: 2022-09-02 16:38
 * @FilePath: \blog-node-mysql-expressd:\Desktop\blog-frontend\src\components\App404\index.tsx
 * @Description: 404 页面
 */
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

const App404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary">
        <Link to="home">Back Home</Link>
      </Button>
    }
  />
)

export default App404
