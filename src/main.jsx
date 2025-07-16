import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Logistica from './pages/Logistica.jsx';
import Ordenar from './pages/Ordenar.jsx';
import Development from './pages/Development.jsx';
import Login from './pages/Login.jsx';

import PrivateRoute from './components/PrivateRoute.jsx'; // 👈 AÑADIDO

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/logistica" element={<Logistica />} />
        <Route path="/ordenar" element={<Ordenar />} />
        
        {/* 🔒 Ruta protegida */}
        <Route
          path="/development"
          element={
            <PrivateRoute>
              <Development />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);