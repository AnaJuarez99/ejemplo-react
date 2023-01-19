import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const TareaTema12 = props => {

    const date = new Date().getFullYear();

    const [year, setYear] = useState(date);

    const incrementar = () => {
        setYear(year + 1);
    }

    const decrementar = () => {
        setYear(year - 1);
    }

    const isNumber = (value) => {
        return /^[0-9]+$/.test(value);
    }

    const handleYear = (e) => {
        
        if(isNumber(e.target.value)){
            setYear(e.target.value);
          }else {
            setYear(date);
          }
        }
    

    return (
        <div>
            <p>Ejercicio Practico</p>
            <hr/>
            <div><strong>Año: {year}</strong></div>
            <button onClick={incrementar}>Siguiente</button>
            <button onClick={decrementar}>Anterior </button>
            <input type="text" onKeyUp={handleYear} placeholder={year}/>
            
        </div>
    );
}

TareaTema12.propTypes = {}

export default TareaTema12