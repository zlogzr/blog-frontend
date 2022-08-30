import AppRouter from '@/routers'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.less'

const App = () => {
  return (
    <div className="app">
      <AppRouter />
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}

export default App
