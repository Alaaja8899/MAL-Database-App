import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import AnimeContextProvider from './context/AnimeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <AnimeContextProvider>
    <App />
    </AnimeContextProvider>
    </Router>
  </React.StrictMode>,
)
