import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from './pages/home';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
