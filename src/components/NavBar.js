import React from 'react';

import {useNavigate} from 'react-router-dom';

export const NavBar=()=> {
    const navigate = useNavigate();

const goVenta = () => {
   navigate('/venta')
  };
  const goHome = () => {
    navigate('/')
   };
   const goCocina = () => {
    navigate('/cocina')
   };
   const goInventario = () => {
    navigate('/inventario')
   };
   const goGanancia = () => {
    navigate('/ganancia')
   };
    return (
        <div className="container mt-2 "  >
         <div className='row d-flex justify-content-center' >
         <h5 className='mr-4 pe-none' style={{cursor:'pointer'}}onClick={goHome}> Inicio</h5>
           <h5 className='mr-4 ' style={{cursor:'pointer'}} onClick={goVenta}> Venta</h5>
           <h5 className='mr-4 ' style={{cursor:'pointer'}} onClick={goCocina}> Cocina</h5>
           <h5 className='mr-4 ' style={{cursor:'pointer'}} onClick={goInventario}> Inventario</h5>
           <h5  onClick={goGanancia} style={{cursor:'pointer'}}> Ganancia</h5>
           </div>
        </div>
    )
}