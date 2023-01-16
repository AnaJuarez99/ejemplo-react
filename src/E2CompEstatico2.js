import React from 'react'

export const E2CompEstatico2 = () => {
    let nombre = "Javi";
    let email= "javier.ruiz@medac.es";

    //Objeco Json
    let persona = {
        id:1,
        apellidos: "Juarez",
    }

    const nombres= ["Javi", "Arturo", "Jesus"];



  return (
    <div>
    <p>E2CompEstatico2</p>
    <hr/>
    <p>Datos del usuario</p>
    <ul>
        <li>Id:{persona.id}</li>
        <li>Nombre:{nombre}</li>
        <li>Apellidos:{persona.apellidos}</li>
        <li>Email:{email}</li>
        {JSON.stringify(persona)}
    </ul>
    {
        nombres.length > 0 ? (
        nombres.map((n,indice)=>{
        return <p key={indice}>{n}</p>
        })
        )      
        :(
            <p>No hay nomvres</p>
        )
    }

    </div>
  )
};
export default E2CompEstatico2;