import React from 'react'
import PropTypes from 'prop-types'

//Destructuracion en JS
//Valor por defecto de propiedades

const E4CompDinamico2 = ({id=0, coche}) => {
  return (
    <div>
      <p>E4CompDinamico2</p>
      <hr/>
      <p>Coches</p>
        <ul>
            <li>{id}</li>
            <li>{coche.nombre}</li>
            <li>{coche.marca}</li>
        </ul>
    </div>
    
  )
}

//Validaciones
E4CompDinamico2.prototype={
    id: PropTypes.string.isRequired,
    coche: PropTypes.object
}
//Valores por defecto
E4CompDinamico2.defaultProps={
    coche:{
        nombre:"M2",
        marca: "BMW"
    }

}

E4CompDinamico2.propTypes = {}

export default E4CompDinamico2