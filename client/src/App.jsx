
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signing from './pages/Signing'
import About from './pages/About'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<Signing />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
     </Routes>
    </BrowserRouter>
    
  )
}
