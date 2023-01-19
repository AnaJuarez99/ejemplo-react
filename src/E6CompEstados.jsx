import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'



function E6CompEstados(props) {

    const[nombre, setNombre]=useState("Javi");//stnombre es ls funcion que modifica nombre (jose)
    
    const cambiarNombre = (e, nombreFinal)=>{
        console.log(e.target);
        setNombre(nombreFinal);
       // e.target.value= nombreFinal
    }


  return (
    <div>
      <p>E6CompEstados</p>
      <hr/>
        <div><strong>{nombre}</strong></div>
        <button onClick={e=>cambiarNombre(e,"Jose")}>Cambiar nombre</button>
        <input type="text" onKeyUp={e=>cambiarNombre(e,e.target.value)}></input>
      
    </div>
  )
}

E6CompEstados.propTypes = {

}

export default E6CompEstados

