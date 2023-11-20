
import React, { useState } from 'react';

const FormularioRegistro = () => {
 const [nombre, setNombre] = useState('');
 const [apellido, setApellido] = useState('');
 const [email, setEmail] = useState('');
 const [telefono, setTelefono] = useState('');
 const [password, setPassword] = useState('');
 const [password2, setPassword2] = useState('');
 const [isPasswordValid, setIsPasswordValid] = useState(true);

 const manejadorPassword = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(e.target.value === password2);
 };

 const manejadorPassword2 = (e) => {
    setPassword2(e.target.value);
    setIsPasswordValid(e.target.value === password);
 };

 const manejadorSubmit = (e) => {
    e.preventDefault();
    if (isPasswordValid) {
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Email:', email);
      console.log('Telefono:', telefono);
      console.log('Contraseña:', password);
    }
 };

 return (
    <form onSubmit={manejadorSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Telefono:
        <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(manejadorPassword)} />
      </label>
      <br />
      <label>
        Confirmar Password:
        <input type="password" value={password2} onChange={manejadorPassword2} />
      </label>
      <br />
      {!isPasswordValid && <p>Las contraseñas no coinciden</p>}
      <br />
      <button type="submit">Enviar</button>
    </form>
 );
};

export default FormularioRegistro;
