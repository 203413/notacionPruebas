import React from 'react';
import axios from 'axios';
import './../../global/assets/css/styles.css';

function Notacion() {
  const comprobar = () => {
    var datos = document.getElementById('cinta').value
    var postData = {
      Conjunto: datos,
    }
    axios
      .post("http://127.0.0.1:8000/api/notacion", postData, {
        headers: { 'Content-Type': 'application/json', },
      })
      .then(response => {
        console.log('si se puo')
        console.log(response.data.status)
        alert(response.data.status)
      }).catch(
        (error) => {
          console.log(error.response.data);
          alert('Hacen falta datos');
        }

      )
  }

  return (
    <div className='container m-5'>
      <h1>Notacion de conjuntos</h1>
      <div className="mb-3">
        <label className="form-label text-bold">Escriba un conjunto</label>
        <input type="text" className="form-control rounded-3 text-regular" id="cinta"  />
        <p className='text-m-22 txt-error' id="msg-cinta2"></p>
      </div>

      <div className='col div-center'>
        <button className="btn btn-primary btn-submit text-bold mb-3 rounded-3" onClick={comprobar}>Calcular</button>
      </div>
    </div>
  );
}

export default Notacion