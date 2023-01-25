import React from 'react'
import PropTypes from 'prop-types'
import {Routes, Route, Link, NavLink, BrowserRouter} from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Contacto from '../pages/Contacto'
import Reservas from '../pages/Reservas'

const RouterPrincipal = props => {
  return (
    <BrowserRouter>
    <div>
    <p>Router Principal</p>
      <hr/>
    </div>

    <nav>
      <ul>
        <li>
          <a href='/'>Inicio</a>
        </li>
        <li>
          <NavLink to='/' exact className={({isActive})=>isActive ? 'activado':''}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/contacto' exact className={({isActive})=>isActive ? 'activado':''}>Contacto</NavLink>
        </li>
        <li>
          <NavLink to='/reservas' exact className={({isActive})=>isActive ? 'activado':''}>Reservas</NavLink>
        </li>
      </ul>
    </nav>

    <section className='contenido'>
        <Routes>
            {/*Cargar componente cuando coincide la ruta indicada */}
                <Route path='/' element={<Inicio/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/reservas' element={<Reservas/>}/>
                {/*Cualquier ruta que no esté definida*/}
                <Route path='*' element={
                    <div>
                        <h1>Error 404</h1>
                        <Link to='/'>Volver al Inicio</Link>
                    </div>
                }/>
            
        </Routes>

    </section>

    </BrowserRouter>
    
    
  )
}

RouterPrincipal.propTypes = {}

export default RouterPrincipal