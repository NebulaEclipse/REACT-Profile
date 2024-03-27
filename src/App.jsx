import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from './pages/home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
