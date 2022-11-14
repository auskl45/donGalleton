import React from 'react';
import {useNavigate, Routes, Route } from 'react-router-dom';

import {Home} from './components/Home';
import {Venta} from './components/venta/Venta';
import {Cocina} from './components/cocina/Cocina';
import {Ganancia} from './components/ganancia/Ganancia';
import Inventario from './components/inventario/Inventario';
import {Merma} from './components/cocina/Merma';
import {NavBar} from './components/NavBar';

export const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home navigateProps={useNavigate} />} />
    <Route path="/venta" element={<Venta />} />
    <Route path="/cocina" element={<Cocina />} />
    <Route path="/cocina/merma" element={<Merma />} />
    <Route path="/ganancia" element={<Ganancia />} />
    <Route path="/inventario" element={<Inventario />} />
    <Route path="/" element={<NavBar  />} />
  </Routes>
  );
};
