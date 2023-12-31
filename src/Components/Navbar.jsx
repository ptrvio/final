import React from 'react'
import { Link } from "react-router-dom";
import ContextGlobal from './utils/global.context';
import { useContext } from "react";




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme , handleChangeTheme} = useContext(ContextGlobal);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/" style={{background: theme.background, color:theme.font}}>Inicio</Link>
      <Link to="/favs" style={{background: theme.background, color:theme.font}}>Favoritos</Link>
      <Link to="/contact" style={{background: theme.background, color:theme.font}}>Contacto</Link>
      <button onClick={handleChangeTheme} style={{background: theme.background, color:theme.font}}>Cambiar Tema</button>
    </nav>
  )
}

export default Navbar