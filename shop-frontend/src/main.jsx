import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './files/Components/navbar.jsx'

import Upload from './files/JS/Upload.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Navbar />
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </StrictMode>
  </BrowserRouter>,
)
