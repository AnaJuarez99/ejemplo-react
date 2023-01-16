import React from 'react'

export const E3CompDinamico1 = (props) => {
  console.log(props)
  return (
    <div>
      <p>E3CompDinamico1</p>
      <hr/>
      <p>Productos</p>
      <ul>
        <li>{props.id}</li>
        <li>{props.producto.nombre}</li>
        <li>{props.producto.marca}</li>
      </ul>
      
    </div>
  )
};

E3CompDinamico1.propTypes = {

};

export default E3CompDinamico1;
