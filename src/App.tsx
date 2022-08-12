import AppRouter from '@/routers'
import { QueryClient, QueryClientProvider } from 'react-query'

import './App.less'

function App() {
  return (
    <div className="app">
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                refetchOnWindowFocus: false
              }
            }
          })
        }
      >
        <AppRouter />
      </QueryClientProvider>
    </div>
  )
}

export default App
