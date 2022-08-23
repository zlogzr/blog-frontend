import * as Auth from '@/auth/auth-provider'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { FullPageErrorFallback } from '@/components/lib'
import { useAuth } from '@/hooks/useAuth'
import { store } from '@/store'
import { get } from '@/utils/request'
import { ConfigProvider, message } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { ReactNode, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

const bootstrapUser = async () => {
  let user = Auth.getAuthUser()
  if (user) {
    const res = await get('/api/user/me')
    if (res.code === 0) {
      user = res.data
    } else {
      message.destroy()
      message.error(res.msg)
    }
  }
  return user
}
const AppProvider = ({ children }: { children: ReactNode }) => {
  const { bootUser } = useAuth()
  useEffect(() => {
    bootstrapUser().then(user => {
      Auth.setAuthUser(user)
      bootUser()
    })
  }, [])
  const options = {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
  const queryClient = new QueryClient(options)
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <Provider store={store}>
            <AppProvider>{children}</AppProvider>
          </Provider>
        </HashRouter>
      </ConfigProvider>
    </ErrorBoundary>
  )
}
