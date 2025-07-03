import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Store from './pages/Store'
import StoreModal from './components/StoreModal'

function App() {
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [storeModalCountdown, setStoreModalCountdown] = useState(10);
  const [storeTarget, setStoreTarget] = useState("");

  const openStoreModal = (storeInfo) =>{
    setStoreTarget(storeInfo);
    setIsStoreModalOpen(true);
    setStoreModalCountdown(10);
  }

  const closeStoreModal = () =>{
    setIsStoreModalOpen(false);
    setStoreTarget(null);
  }

  return (
    <BrowserRouter>
      <main>
        <div className="pageContainer">
        <Header />
        <Routes>
          <Route path ="/" element = {<Home />} />
          <Route path ="/about" element ={<About />} />
          <Route path ="/contact" element ={<Contact />} />
          <Route path ="/store" element = {<Store openStoreModal={openStoreModal} />} />
          <Route path ="*" element = {<NotFound />} />
        </Routes>
        <Footer />
        {(isStoreModalOpen) && <StoreModal 
          isOpen={isStoreModalOpen}
          onClose={closeStoreModal} 
          storeTarget={storeTarget} />}
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
