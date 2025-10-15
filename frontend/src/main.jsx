import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './files/Components/navbar.jsx'

import Dashboard from './files/JS/Dashboard.jsx';
import Sell from './files/JS/Sell.jsx';
import Stock from './files/JS/Stock.jsx';
import Upload from './files/JS/Upload.jsx';
import Report from './files/JS/Report.jsx';
import Settings from './files/JS/Setting.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Navbar />
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/shop" element={<Sell />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/report" element={<Report />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </StrictMode>
  </BrowserRouter>,
)
