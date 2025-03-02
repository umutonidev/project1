import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import View from './components/View'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<View />} />
        </Route>
      </Routes>

    </Router>

  )
}

export default App
