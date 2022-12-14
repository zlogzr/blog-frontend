/*
 * @Author: zlogzr
 * @Date: 2022-08-12 16:16
 * @LastEditors: zlogzr
 * @LastEditTime: 2022-09-02 16:31
 * @FilePath: \blog-node-mysql-expressd:\Desktop\blog-frontend\src\components\lib.tsx
 * @Description:
 */
import styled from '@emotion/styled'
import { Button, Spin, Typography } from 'antd'

// 类型守卫
const isError = (value: any): value is Error => value?.message
// 错误提示组件
export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return <Typography.Text type={'danger'}>{error?.message}</Typography.Text>
  }
  return null
}

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

// 路由切换
export const FullPageLoading = () => (
  <FullPage>
    <Spin size={'large'} />
  </FullPage>
)

// 全局错误
export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <ErrorBox error={error} />
  </FullPage>
)

// 宽度100%的Button
export const LongButton = styled(Button)`
  width: 100%;
`

export const Container = styled.div`
  min-height: calc(100vh - 192px);
  margin: 12px;
  padding: 12px;
  background-color: #fff;
`
