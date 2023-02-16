import React from 'react'
import ReactDOM from 'react-dom/client'
import {IndexRoutes} from './Routes/indexRoutes'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/united/bootstrap.min.css';
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IndexRoutes/>
  </React.StrictMode>,
)
