import React from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import './../../global/assets/css/styles.css';

function Notacion_Validar() {

    return (
        <>
            <div className='container m-5'>

                <ul class="nav nav-tabs mb-3">
                    <li class="nav-item">
                        <NavLink to="/notacion/" className="nav-link">Regresar al menú</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/notacion/quiz" className="nav-link">Quiz</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/notacion/validar" aria-current="page" className="nav-link active">Validar</NavLink>
                    </li>
                </ul>

                <h1 className='fs-3 text-bold mb-3'>Validar listas ordenadas</h1>
                <h2 className='text-m-23 text-regular text-center mb-2'>Introduzca un conjunto: </h2>
                <div class="input-group mb-5">
                    <button class="btn btn-outline-success" type="button" id="button-addon1">Validar</button>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Escriba aquí" />
                        <label for="floatingInputGroup1">Escriba aquí</label>
                    </div>

                </div>

                <h1 className='fs-3 text-bold mb-3'>Validar carinalidad</h1>
                <h2 className='text-m-23 text-regular text-center mb-1'>Introduzca un conjunto: </h2>
                <div class="input-group mb-3">
                    <button class="btn btn-outline-success" type="button" id="button-addon1">Validar</button>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Escriba aquí" />
                        <label for="floatingInputGroup1">Escriba aquí</label>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Notacion_Validar;