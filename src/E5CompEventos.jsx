import React from 'react'


const handlerClick = ()=>{
  alert("Se ha ejecutado el evento click sin capturar el evento")

}
const handlerClickEvent = (e,n)=>{
  console.log(e);
  alert("Evento -" +n);
  
}

const handlerMouseEnter = e =>{
  console.log(e);
  alert("Mouse Enter -" );

}
const handlerMouseLeave = e =>{
  console.log(e);
  alert("Mouse Leave -" );
}



const E5CompEventos = props => {
  return (
    <div>
      <div>
          <div>CompEventos</div>
          <p><button onClick={handlerClick}>Click</button></p>
          <p><button onClick={e=>handlerClickEvent(e, "Unclick")}>UnClick</button></p>
          <p><button onDoubleClick={e=>handlerClickEvent(e, "Dobleclick")}>DoubleClick</button></p>
        
      </div>

      <div class="cuadrado" 
      onMouseEnter={handlerMouseEnter} 
      onMouseLeave={handlerMouseLeave}>
      Pasa el ratón por encima
      </div>

    </div>
  )
}

E5CompEventos.propTypes = {

}

export default E5CompEventos;
