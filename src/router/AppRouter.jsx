import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from '../components/global/NavBar';
import Index from '../components/modules/conjunto_potencia/Index';
import Operaciones from '../components/modules/operaciones/operaciones';
import Notacion from '../components/modules/notacion/Notacion';

const AppRouter = () => {
    
    return (
        <>
            <div className='row mb-5 pb-3'>
                <NavBar />
            </div>
            <div className='container-xxl m-3 pt-1'>
                <Router>
                    <Routes>
                        {/* Agregar sus rutas aquí */}
                        <Route path='/potencia' element={<Index />} />
                        <Route path='/operaciones' element={<Operaciones />} />
                        <Route path='/notacion' element={<Notacion />} />
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default AppRouter
