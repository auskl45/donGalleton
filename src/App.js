import React from 'react';
import {useNavigate, Routes, Route } from 'react-router-dom';

import {Home} from './components/Home';
import {Venta} from './components/venta/Venta';
import {Cocina} from './components/cocina/Cocina';
import {Ganancia} from './components/ganancia/Ganancia';
import {Inventario} from './components/inventario/Inventario';

export const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home navigateProps={useNavigate} />} />
    <Route path="/venta" element={<Venta />} />
    <Route path="/cocina" element={<Cocina />} />
    <Route path="/ganancia" element={<Ganancia />} />
    <Route path="/inventario" element={<Inventario />} />
  </Routes>
  );
};
