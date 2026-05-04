import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage'
import Loginpage from './Pages/Loginpage'
import Signuppage from './Pages/Signuppage'
import NoteFound from './Pages/NoteFound'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position='top-center'
        toastOptions={{
          duration: 4000,
          style: {
            padding: '20px',
            fontSize: '18px',
            fontWeight: '600',
            boxShadow: '0 4px 12px'
          }
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Loginpage />} />
            <Route path='/signup' element={<Signuppage />} />
            <Route path='*' element={<NoteFound />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </BrowserRouter>
  )
}

export default App