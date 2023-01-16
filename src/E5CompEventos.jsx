import React from 'react'


const E5CompEventos = props => {
  return (
    <div>
        <div>CompEventos</div>
        <p><button onClick={handlerClick}>Click</button></p>
        <p><button onClick={e=>handlerClickEvent(e, "Unclick")}>Click</button></p>
        <p><button onDoubleClick={e=>handlerClickEvent(e, "Dobleclick")}>Click</button></p>
      
    </div>
  )
}

E5CompEventos.propTypes = {

}

export default E5CompEventos;
