import React from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import './../../global/assets/css/styles.css';

function Notacion_Quiz() {

    return (
        <>
            <div className='container m-5'>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <NavLink to="/notacion/" className="nav-link">Regresar al menú</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/notacion/quiz" aria-current="page" className="nav-link active">Quiz</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/notacion/validar" className="nav-link">Validar</NavLink>
                    </li>
                </ul>

                <h2>
                    hola jeje quiz
                </h2>
            </div>
        </>
    )
}

export default Notacion_Quiz;