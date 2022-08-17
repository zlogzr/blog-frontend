import 'antd/dist/antd.less'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { AppProviders } from './context'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <AppProviders>
    <App />
  </AppProviders>

  // </React.StrictMode>
)

reportWebVitals()
