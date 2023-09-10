import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName]= useState('');
  const [email, setEmail]=useState('');
  const [err, setErr] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
        setErr('Los campos deben estar completos');
    } else if (name.length < 3 || name.indexOf(" ") === 0 || email.length < 6) {
        setErr('Por favor chequea que la información sea la correcta');    
    } else {
        setErr('');
        alert('Se envio su solicitud');    
    }
}

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <p>Ingrese su nombre:</p>
          <input type='text' value={name} className="input" onChange={event => setName(event.target.value)}/>
        </label>
        <label>
          <p>Ingrese su email</p>
          <input type='text' value={email} className="input" onChange={event => setEmail(event.target.value)}/>
        </label>
        <div>
          <button className="" type="submit">Enviar</button>
        </div>
        {err && <p className="err">{err}</p>} 
      </form>
    </>
  );
};

export default Form;


