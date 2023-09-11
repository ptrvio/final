import React from "react";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const navigate = useNavigate()
  
  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </>
  );
};

export default Favs;
