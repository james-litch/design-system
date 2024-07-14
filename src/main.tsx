import React from 'react'
import ReactDOM from 'react-dom/client'
import TestApp from './TestApp.tsx'

import './app.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
)
