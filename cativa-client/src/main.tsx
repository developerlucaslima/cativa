import 'react-toastify/dist/ReactToastify.css'
import './styles/global.scss'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Toast } from './components/Toast'
import { AppRoutes } from './routes'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <Toast />
    </QueryClientProvider>
  </React.StrictMode>,
)
