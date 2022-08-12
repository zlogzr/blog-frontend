import { ErrorBoundary } from '@/components/ErrorBoundary'
import { FullPageErrorFallback } from '@/components/lib'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.less'
import zhCN from 'antd/es/locale/zh_CN'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <ConfigProvider locale={zhCN}>
    <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <App />
    </ErrorBoundary>
  </ConfigProvider>
  // </React.StrictMode>
)

reportWebVitals()
