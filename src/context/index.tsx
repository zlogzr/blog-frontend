import { ErrorBoundary } from '@/components/ErrorBoundary'
import { FullPageErrorFallback } from '@/components/lib'
import { store } from '@/store'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const options = {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
  const queryClient = new QueryClient(options)
  return (
    <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          </Provider>
        </HashRouter>
      </ConfigProvider>
    </ErrorBoundary>
  )
}
