import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Datos enviados:', formData);
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        <br />
        <label>Apellido:</label>
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br />
        <label>Contraseña:</label>
        <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} required />
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registration;