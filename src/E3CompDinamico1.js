import React from 'react'

export const E3CompDinamico1 = (props) => {
  console.log(props)
  return (
    <div>
      <div>CompDinamico1</div>
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
