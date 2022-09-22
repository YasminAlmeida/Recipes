import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../View/Header/index.js';
import Recipes from '../View/Recipes/index.js';
import Footer from '../View/Footer/index.js';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Recipes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
