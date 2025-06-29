import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Store from './pages/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path ="/" element = {<Home />} />
          <Route path ="/about" element ={<About />} />
          <Route path ="/contact" element ={<Contact />} />
          <Route path ="/store" element = {<Store />} />
          <Route path ="*" element = {<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
