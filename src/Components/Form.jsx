import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName]= useState('');
  const [email, setEmail]=useState('');
  const [err, setErr] = useState('');
  const [info, setInfo] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = (event) =>{

    event.preventDefault();

    if (!name.trim() || !email.trim()) {
        setErr('Los campos deben estar completos');
      
    } else if (name.length < 5 || name.indexOf(" ") === 0 || email.length < 6) {
        setErr('Por favor verifique su información nuevamente');
          
    } else {
        setErr('');
        setInfo(true);    
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
          <button onClick={() => navigate("/home")}>Volver</button>
        </div>
        {err && <p className="err">{err}</p>}
        {info && <p className="info">Gracias {name}, te contactaremos cuando antes vía mail</p>} 
      </form>
      
    </>
  );
};

export default Form;


