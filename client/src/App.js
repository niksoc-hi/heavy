import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/index'
import './App.scss'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
