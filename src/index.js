import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';

const root = ReactDOM.createRoot(document.getElementById('wrap'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
          <Route path="/" element={<Main />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
